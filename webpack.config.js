const path = require('path');
const { merge } = require('webpack-merge');
const parts = require("./webpack.parts");

const PATH = {
    ENTRY: path.resolve(__dirname, 'src'),
    BUILD: path.resolve(__dirname, 'dist')
}
const commonConfig = merge([
    {
        entry: {
            main: PATH.ENTRY,
        },   
        output: {
            filename: '[name].js',
            path: PATH.BUILD,
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