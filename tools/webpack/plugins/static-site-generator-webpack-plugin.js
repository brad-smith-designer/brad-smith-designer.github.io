var RawSource = require('webpack-sources/lib/RawSource');
var evaluate = require('eval');
var path = require('path');
var Promise = require('bluebird');



function StaticSiteGeneratorWebpackPlugin(options) {
  options = options || {};

  this.entry = options.entry;
  this.paths = Array.isArray(options.paths) ? options.paths : [options.paths || '/'];
  this.locals = options.locals;
  this.globals = options.globals;
}

StaticSiteGeneratorWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;
  addThisCompilationHandler(compiler, function(compilation) {
    addOptimizeAssetsHandler(compilation, function(_, done) {
      var webpackStats = compilation.getStats();
      var webpackStatsJson = webpackStats.toJson();

      try {
        var asset = findAsset(self.entry, compilation, webpackStatsJson);

        if (asset == null) {
          throw new Error('Source file not found: "' + self.entry + '"');
        }

        var assets = getAssetsFromCompilation(compilation, webpackStatsJson);

        var source = asset.source();
        var render = evaluate(source, /* filename: */ self.entry, /* scope: */ self.globals, /* includeGlobals: */ true);

        if (render.hasOwnProperty('default')) {
          render = render['default'];
        }

        if (typeof render !== 'function') {
          throw new Error('Export from "' + self.entry + '" must be a function that returns an HTML string. Is output.libraryTarget in the configuration set to "umd"?');
        }

        renderPaths(self.locals, self.paths, render, assets, webpackStats, compilation)
          .nodeify(done);
      } catch (err) {
        compilation.errors.push(err.stack);
        done();
      }
    });
  });
};

function renderPaths(userLocals, paths, render, assets, webpackStats, compilation) {
  var renderPromises = paths.map(function(outputPath) {
    var locals = {
      path: outputPath,
      assets: assets,
      webpackStats: webpackStats
    };

    for (var prop in userLocals) {
      if (userLocals.hasOwnProperty(prop)) {
        locals[prop] = userLocals[prop];
      }
    }

    var renderPromise = render.length < 2 ?
      Promise.resolve(render(locals)) :
      Promise.fromNode(render.bind(null, locals));

    return renderPromise
      .then(function(output) {
        var outputByPath = typeof output === 'object' ? output : makeObject(outputPath, output);

        var assetGenerationPromises = Object.keys(outputByPath).map(function(key) {
          var rawSource = outputByPath[key];
          var assetName = pathToAssetName(key);

          if (compilation.assets[assetName]) {
            return;
          }

          compilation.assets[assetName] = new RawSource(rawSource);
         
        });

        return Promise.all(assetGenerationPromises);
      })
      .catch(function(err) {
        compilation.errors.push(err.stack);
      });
  });

  return Promise.all(renderPromises);
}

var findAsset = function(src, compilation, webpackStatsJson) {
  if (!src) {
    var chunkNames = Object.keys(webpackStatsJson.assetsByChunkName);

    src = chunkNames[0];
  }

  var asset = compilation.assets[src];

  if (asset) {
    return asset;
  }

  var chunkValue = webpackStatsJson.assetsByChunkName[src];

  if (!chunkValue) {
    return null;
  }
  // Webpack outputs an array for each chunk when using sourcemaps
  if (chunkValue instanceof Array) {
    // Is the main bundle always the first element?
    chunkValue = chunkValue.find(function(filename) {
      return /\.js$/.test(filename);
    });
  }
  return compilation.assets[chunkValue];
};

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
var getAssetsFromCompilation = function(compilation, webpackStatsJson) {
  var assets = {};
  for (var chunk in webpackStatsJson.assetsByChunkName) {
    var chunkValue = webpackStatsJson.assetsByChunkName[chunk];
    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first JS element?
      chunkValue = chunkValue.find(function(filename) {
        return /\.js$/.test(filename);
      });
    }

    if (compilation.options.output.publicPath) {
      chunkValue = compilation.options.output.publicPath + chunkValue;
    }
    assets[chunk] = chunkValue;
  }

  return assets;
};

function pathToAssetName(outputPath) {
  var outputFileName = outputPath.replace(/^(\/|\\)/, ''); // Remove leading slashes for webpack-dev-server

  if (!/\.(html?)$/i.test(outputFileName)) {
    outputFileName = path.join(outputFileName, 'index.html');
  }

  return outputFileName;
}

function makeObject(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}
function addThisCompilationHandler(compiler, callback) {
  if(compiler.hooks) {
    /* istanbul ignore next */
    compiler.hooks.thisCompilation.tap('static-site-generator-webpack-plugin', callback);
  } else {
    compiler.plugin('this-compilation', callback);
  }
}

function addOptimizeAssetsHandler(compilation, callback) {
  if(compilation.hooks) {
    /* istanbul ignore next */
    compilation.hooks.optimizeAssets.tapAsync('static-site-generator-webpack-plugin',callback);
  } else {
    compilation.plugin('optimize-assets', callback);
  }
}


module.exports = StaticSiteGeneratorWebpackPlugin;
