module.exports = function (api) {
	// Cache the returned value forever and don't call this function again.
	api.cache(true);

	// Don't cache at all. Not recommended because it will be very slow.
	//api.cache(false);

	// Cached based on the value of some function. If this function returns a value different from
	// a previously-encountered value, the plugins will re-evaluate.
	//var env = api.cache(() => process.env.NODE_ENV);

	// If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
	// any possible NODE_ENV value that might come up during plugin execution.
	//var isProd = api.cache(() => process.env.NODE_ENV === "production");

	// .cache(fn) will perform a linear search though instances to find the matching plugin based
	// based on previous instantiated plugins. If you want to recreate the plugin and discard the
	// previous instance whenever something changes, you may use:
	//var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

	// Note, we also expose the following more-verbose versions of the above examples:
	//api.cache.forever(); // api.cache(true)
	//api.cache.never();   // api.cache(false)
	//api.cache.using(fn); // api.cache(fn)
	return {
	  "presets": [
		[
		  "@babel/preset-env",
		  Object.assign({}, process.env.NODE_ENV === "test"
		  	? {
				  "loose": true,
					"targets": {
						"node": 8,
						"browsers": ["> 0.25%", "IE >= 9"]
					}
			  }
			: { "modules": false }
			)
		]
	  ],
	  "plugins": [
		  ["@babel/plugin-transform-react-jsx", {
			  "pragma": "h"
		  }],
		  "@babel/plugin-syntax-dynamic-import",
		  "@babel/plugin-transform-object-assign",
		  "@babel/plugin-proposal-object-rest-spread",
		  ["module:fast-async", { "spec": true }]
		]
	}
	
  };

  