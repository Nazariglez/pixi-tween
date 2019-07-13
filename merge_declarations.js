const path = require("path");
const fs = require("fs");

const dts = fs.readFileSync(path.resolve("index.d.ts"), {encoding: "utf8"});
const pixi_dts = fs.readFileSync(path.resolve("types", "pixi.js.d.ts"), {encoding: "utf8"});

const final_dts = dts + "\n" + pixi_dts;
fs.writeFileSync(path.resolve("index.d.ts"), final_dts, {encoding: "utf8"});
