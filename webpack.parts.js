const path = require('path');
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        port: 9000
    }
});

exports.page = ({ title }) => ({
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title,
            },
        }),
    ],
});