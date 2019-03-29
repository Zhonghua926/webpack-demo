const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new UglifyJsPlugin(), // 压缩混淆输出的 js 代码
    ],
    module: {
        rules: [ // 规则
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/, // 匹配的范围包括node_modules里的文件
                use: {
                    loader: 'babel-loader', // 使用babel-loader将ES6/jsx语法转化为ES5语法
                    options: {
                        presets: ['es2015', 'react'],
                        // 使用 Babel 的预设插件 babel-preset-es2015 and babel-preset-react 来转义 ES6 和 React。
                    },
                },
            },
            {
                test: /\.css$/, // 匹配到.css后缀的文件名
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        // 开启 CSS Module 功能
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.jsx', '.scss', '.less'],
    },
}