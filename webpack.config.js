const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  // Глобальные переменные на основе окружения
  const APP_ENV = isProduction
    ? require("./.env.production")
    : require("./.env.dev");

  const sourcePath = path.join(__dirname, "./src");

  return {
    context: sourcePath,

    entry: "./index.tsx",

    output: {
      publicPath: "/",
      filename: "[name].js",
      chunkFilename: "[name].js"
    },

    // Как подключать модули
    resolve: {
      // порядок подключения файлов с одинаковыми именами для typescript
      extensions: [".js", ".ts", ".tsx"],

      // короткие пути для импортов в приложении
      alias: {
        pages: path.resolve(__dirname, "src/pages/"),
        "react-dom": "@hot-loader/react-dom"
      }
    },

    module: {
      rules: [
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          use: [
            !isProduction && "react-hot-loader/webpack",
            "cache-loader",
            "ts-loader",
            {
              loader: "eslint-loader",
              options: {
                emitWarning: !isProduction,
                failOnError: isProduction,
                fix: false
              }
            }
          ].filter(Boolean)
        },

        // .less
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "less-loader"
          ]
        }
      ]
    },

    plugins: [
      // Глобальные переменные
      new webpack.DefinePlugin({
        APP_ENV: JSON.stringify(APP_ENV)
      }),

      // Всё, что в папке assets копируется в dist
      new CopyWebpackPlugin([
        {
          from: "assets",
          to: path.resolve(__dirname, "dist/")
        }
      ]),

      // Создание index.html на основе шаблона
      new HtmlWebpackPlugin({
        template: "assets/index.html"
      }),

      // Создание отдельного файла main.css
      new MiniCssExtractPlugin()
    ],

    optimization: {
      // Использовать разбиение на чанки всех видов
      splitChunks: {
        chunks: "all"
      }
    },

    // Source map
    devtool: isProduction ? false : "cheap-module-eval-source-map",

    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
      inline: true,
      publicPath: "/"
    }
  };
};
