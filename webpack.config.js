const production = process.env.NODE_ENV === "production";
const path = require("path");
const DtsBundlePlugin = require("dts-bundle-webpack");

const distPath = path.resolve(__dirname, "./build");

let config = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/main.ts"],
  output: {
    path: distPath,
    filename: "pixi-tween.js",
    library: "tween"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  externals: [{
    "pixi.js": "PIXI"
  }],
  mode: production ? "production" : "development",
  plugins: [
    new DtsBundlePlugin({
      name: "pixi-tween",
      main: "./build/types/main.d.ts",
      out: "../pixi-tween.d.ts",
    })
  ]
};

module.exports = config;