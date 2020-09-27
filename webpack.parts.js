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

exports.loadCSS = ({include, exclude} = {}) => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  })

exports.page = ({ title }) => ({
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title,
            },
        }),
    ],
});