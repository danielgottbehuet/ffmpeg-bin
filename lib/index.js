"use strict";
const path = require("path");
const BinWrapper = require("bin-wrapper");

module.exports = new BinWrapper()
  .src(
    "https://raw.githubusercontent.com/danielgottbehuet/ffmpeg-bin/vendor/darwin-x64",
    "darwin"
  )
  .dest(path.join(__dirname, "./vendor"))
  .use("darwin-x64");
