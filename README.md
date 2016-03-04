pixi-tween - Under Development
======================

pixi-tween is a plugin for Pixi.js v3.0.8 or higher to create ...

## Installation
```
npm install pixi-tween
```

## Usage
### Browserify - Webpack
If you use Browserify or Webpack you can use pixi-tween like this:

```js
var PIXI = require('pixi.js');
var tweenManager = require('pixi-tween'); //pixi-tween is added automatically to the PIXI namespace

//create PIXI renderer
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(stage);
  PIXI.tween.update();
}
animate();
```

### Prebuilt files

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(stage);
  PIXI.tween.update();
}
animate();
```
