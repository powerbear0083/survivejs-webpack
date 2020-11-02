const { mode } = require("webpack-nano/argv");
const {
    MiniHtmlWebpackPlugin, // dist 底下沒有 index.html，可以透過此 plugin 產生 html
} = require("mini-html-webpack-plugin");

module.exports = {
    mode,
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: "Webpack demo",
            },
        }),
    ],
};