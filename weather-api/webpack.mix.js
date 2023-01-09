const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.version();

if (mix.inProduction()) {
	mix.sourceMaps();
}

mix.js('resources/js/app.js', 'public/js/app.js');
mix.sass('resources/sass/app.scss', 'public/css/app.css');

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin") 

mix.webpackConfig({
        plugins: [
            // new NodePolyfillPlugin(),
        ],
        resolve: {
            fallback: {
                fs: require.resolve('browserify-fs'),
				path: require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "vm": require.resolve("vm-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "stream": require.resolve("stream-browserify"),
            "constants": require.resolve("constants-browserify"),
            }
        }
    })