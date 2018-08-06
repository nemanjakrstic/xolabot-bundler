const path = require('path');

module.exports = {
    entry: path.resolve('src', 'index.js'),
    devtool: 'source-map',
    mode: 'production',
    output: {
        path: path.resolve('build'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/react',
                        [
                            '@babel/env',
                            {
                                targets: { browsers: 'last 2 versions' },
                                useBuiltIns: 'usage',
                            },
                        ],
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
                },
            },
        ],
    },
};
