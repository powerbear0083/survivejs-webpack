const path = require('path');
const { mode } = require("webpack-nano/argv");
const {
    MiniHtmlWebpackPlugin, // dist 底下沒有 index.html，可以透過此 plugin 產生 html
} = require("mini-html-webpack-plugin");

module.exports = {
    watch: mode === "development",
    entry: {
        main: './src/index.js'
    },
    mode,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
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