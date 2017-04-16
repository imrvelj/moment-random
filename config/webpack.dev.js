const path = require('path');
const include = path.resolve(__dirname, '../src');

module.exports = {
    entry: './demo/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', include }
        ]
    },
    devServer: {
        port: 9090,
        contentBase: path.resolve(__dirname, '../demo')
    }
};
