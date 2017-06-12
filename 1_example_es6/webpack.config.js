var path = require('path');

// variables
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// webpack configuration
module.exports = {
    context: sourcePath,
    entry: {
        main: './app.js'
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            }
        ],
    }
};