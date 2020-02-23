const webpack = require("webpack");

const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  myOptions: { foo: "bar" },
  inject: "body",
  template: "nunjucks-html-loader!./src/views/pages/home.njk",
  filename: "index.html"
});

const HtmlWebpackPluginConfigGroups = new HtmlWebpackPlugin({
  myOptions: { foo: "bar" },
  inject: "body",
  template: "nunjucks-html-loader!./theme/templates/groups.njk",

  filename: "groups.html"
});

module.exports = {
  entry: {
    main: "./src/assets/js/script.js"
  },
  output: {
    path: path.resolve(__dirname, `./public/`),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.html$|njk|nunjucks/,
        use: [
          "html-loader",
          {
            loader: "nunjucks-html-loader",
            options: {
              // Other super important. This will be the base
              // directory in which webpack is going to find
              // the layout and any other file index.njk is calling.
              minimize: false,
              minifyJS: true,
              minifyCSS: true,
              collapseWhitespace: false,
              searchPaths: ["./src/views"],
              root: path.resolve(__dirname, "public")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("production/[name].css"),
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig
    // ,
    // HtmlWebpackPluginConfigGroups
  ]
};
