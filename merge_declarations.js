const path = require("path");
const fs = require("fs");

const easing_dts = fs.readFileSync(path.resolve("types", "Easing.d.ts"), {encoding: "utf8"});
const tween_dts = fs.readFileSync(path.resolve("types", "Tween.d.ts"), {encoding: "utf8"});
const tween_manager_dts = fs.readFileSync(path.resolve("types", "TweenManager.d.ts"), {encoding: "utf8"});
const tween_path_dts = fs.readFileSync(path.resolve("types", "TweenPath.d.ts"), {encoding: "utf8"});

const pixi_dts = fs.readFileSync(path.resolve("types", "pixi.js.d.ts"), {encoding: "utf8"});

const declarations = [tween_dts, tween_manager_dts, tween_path_dts, easing_dts].map(dts => {
    return dts.split("\n").filter(line => line.indexOf("import ") === -1).join("\n");
}).join("\n");

const final_dts = pixi_dts.replace("{{{ CLASS }}}" ,declarations);
fs.writeFileSync(path.resolve("index.d.ts"), final_dts, {encoding: "utf8"});
