const merge = require("webpack-merge").default;
const common = require("../webpack.common");
const { buildPath, publicPath } = require("../path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]/js/[name].[hash].js",
    path: buildPath,
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 10000,
              name: `[folder]/images/[name].[hash:7].[ext]`,
              publicPath:publicPath
            },
          },
        ],
      },
    ],
  },
  optimization:{
    minimize: true,
    minimizer:[
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin() 
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name]/css/[name].[contenthash].css",
        chunkFilename: "[name].[contenthash].css",
    }),
  ]
});
