"use strict";
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let path = require("path");
let cookieParser = require("cookie-parser");

let webpack = require("webpack");
let webpackDevMiddleware = require("webpack-dev-middleware");
let webpackHotMiddleware = require("webpack-hot-middleware");
let config = require("../webpack.config");

let router = express.Router();

//initiate express
let app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cookieParser());

const dataRoutes = require("./config/dataRoutes");
const stockRoutes = require("./config/stockRoutes");
const userRoutes = require("./config/userRoutes");
app.use("/api", dataRoutes);
app.use("/api", stockRoutes);
app.use("/api", userRoutes);

// webpack loads index.html, looks for script src
app.get("/public/bundle.js", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/bundle.js"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//set and run the port and server
app.set("port", process.env.PORT || 8000);
let port = app.get("port");
app.listen(port);
console.log("Server listening on PORT", port);

module.exports = app;
