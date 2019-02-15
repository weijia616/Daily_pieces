const path = require('path');

module.exports = [
    {
        entry: './src/js/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'compiled_js')
        }
    },
    {
        entry: './src/js/ES6_Promise.ts',
        output: {
            filename: 'es6_promise_compiled.js',
            path: path.resolve(__dirname, 'compiled_js')
        }
    },
    {
        entry: './src/js/file_reader.ts',
        output: {
            filename: 'file_reader_compiled.js',
            path: path.resolve(__dirname, 'compiled_js')
        }
    },
    {
        entry: './src/js/ES6_async.ts',
        output: {
            filename: 'es6_async_compiled.js',
            path: path.resolve(__dirname, 'compiled_js')
        }
    },
];