const path = require('path');
const { merge } = require('webpack-merge');
const parts = require("./webpack.parts");

const commonConfig = merge([
    {
        entry: {
            app: path.resolve(__dirname, 'src'),
        },   
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        }
    },
    parts.loadCSS(),
    parts.page({ title: "Webpack demo" })
]);
const productionConfig = merge([]);
const developmentConfig = merge([parts.devServer()]);

module.exports = (mode) => {
    const pages = [
      parts.page({
        entry: path.resolve(__dirname, 'src'),
      })
    ];
    const config = mode === "production" ? productionConfig : developmentConfig;
  
    return merge([commonConfig, config, { mode }].concat(pages));
  };