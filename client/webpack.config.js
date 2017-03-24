var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: './src/main.ts',
        polyfill: './src/polyfill.ts'
    },
    output: {
        filename: './bundles/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 3000,
        proxy: {
            '/api/*': 'http://localhost:8080/lodegro/',
            '/login': 'http://localhost:8080/lodegro/'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
            chunksSortMode: function (chunk1, chunk2) { // sort function
                var orders = ['polyfill', 'app']; // Necessary order
                var order1 = orders.indexOf(chunk1.names[0]);
                var order2 = orders.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        })
    ]
};
