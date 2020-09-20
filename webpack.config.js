const path = require('path');
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: "Webpack demo",
            },
        }),
    ],
};