import { h } from 'preact';

const head = ({ title, meta, children }) => <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <link rel="shortcut icon" href={`/static/img/favicon.ico`} />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
    <title>{title}</title>
    {children}
    {meta && meta.map(item => {
        if (item.name) return <meta name={item.name} content={item.content} />;
        if (item.property) return <meta property={item.property} content={item.content} />;
    })}
    <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/static/img/favicon/site.webmanifest"/>
    <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#000000"/>
    <meta name="msapplication-TileColor" content="#ffffff"></meta>
    <meta name="theme-color" content="#ffffff"></meta>

</head>;

export default head;
    