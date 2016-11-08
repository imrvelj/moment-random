const path = require('path');
const include = path.join(__dirname, 'src');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'index.umd.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'momentRandom',
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include}
        ]
    }
};
