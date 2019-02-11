"use strict";

const webpack = require("webpack");
const path = require("path");

let BUILD_DIR = path.resolve(__dirname, "client/public");
let APP_DIR = path.resolve(__dirname, "client");

let config = {
  //entry point for the app

  entry: [APP_DIR + "/index.js"],
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "client"),
        query: {
          presets: ["es2015", "stage-1", "react"]
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, "client"),
        loader: "style!css!sass"
      }
    ]
  }
};

module.exports = config;
