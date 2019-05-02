const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const APP_ENV = isProduction
    ? require("./.env.production")
    : require("./.env.dev");
  const sourcePath = path.join(__dirname, "./src");

  return {
    context: sourcePath,
    entry: "./index.tsx",
    output: {
      publicPath: "/"
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      mainFields: ["module", "browser", "main"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
        pages: path.resolve(__dirname, "src/pages/")
      }
    },
    devtool: isProduction ? false : "cheap-module-eval-source-map",
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
      inline: true,
      publicPath: "/"
    },
    module: {
      rules: [
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          use: [
            !isProduction && "react-hot-loader/webpack",
            "ts-loader",
            "tslint-loader"
          ].filter(Boolean)
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        APP_ENV: JSON.stringify(APP_ENV)
      }),
      new CopyWebpackPlugin([
        {
          from: "assets",
          to: path.resolve(__dirname, "dist/")
        }
      ]),
      new HtmlWebpackPlugin({
        template: "assets/index.html"
      })
    ],
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  };
};
