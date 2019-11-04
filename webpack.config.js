const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        include: __dirname + "/src/",
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        },
        test: /\.jsx?$/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("css/mystyles.css")],
  resolve: {
    alias: {
      Src: path.resolve(__dirname, "./src/"),
      Components: path.resolve(__dirname, "./src/components/")
    }
  }
};
