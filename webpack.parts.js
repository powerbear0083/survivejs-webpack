const path = require('path');
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include,
                exclude,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            }
        ]
    }
})


exports.autoprefixer = () => ({
    loader: 'postcss-loader',
    options: {
        sourceMap: true,
        postcssOptions: {
            plugins: [
                [
                    'autoprefixer'
                ],
            ],
        }
    }
})

exports.extractCSS = ({ include, exclude, use = [] } = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    include,
                    exclude,
                    use: [
                        {
                            options: {
                                hmr: true
                            }
                        },
                        MiniCssExtractPlugin.loader
                    ].concat(use),
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
        ],
    };
};

