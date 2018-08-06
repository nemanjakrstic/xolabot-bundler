#!/usr/bin/env node
const spawn = require('cross-spawn');
const path = require('path');

const webpack = path.resolve('node_modules', 'webpack', 'bin', 'webpack.js');

const webpackProcess = spawn(webpack);

webpackProcess.on('close', code => process.exit(code));

webpackProcess.on('error', error => {
    console.error(error);
    process.exit(1);
});
