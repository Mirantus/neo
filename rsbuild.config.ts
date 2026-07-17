import { defineConfig } from "@rsbuild/core";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const isProduction = process.env.NODE_ENV === "production";

const APP_ENV = isProduction
  ? require("./.env.production")
  : require("./.env.dev");

export default defineConfig({
  resolve: {
    alias: {
      pages: "./src/pages",
    },
  },
  source: {
    entry: {
      index: "./src/index.tsx",
    },
    define: {
      APP_ENV: JSON.stringify(APP_ENV),
    },
  },
  output: {
    assetPrefix: "/",
    sourceMap: !isProduction,
    copy: [
      {
        from: "assets",
        context: "src",
        to: "",
        globOptions: { ignore: ["**/index.html"] },
      },
    ],
  },
  html: {
    template: "./src/assets/index.html",
  },
  server: {
    publicDir: {
      name: "src/assets",
      copyOnBuild: false,
    },
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [
    pluginTypeCheck({
      enable: !isProduction,
    }),
  ],
});
