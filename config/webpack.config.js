const path = require('path');

module.exports = {
    entry: './src/index',
    externals: {
        moment: 'moment'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'moment-random.js',
        libraryTarget: 'umd',
        library: 'momentRandom',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules')
        ]
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, '../node_modules')
        ]
    },
};