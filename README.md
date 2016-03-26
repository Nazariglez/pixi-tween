pixi-tween - Under Development
======================

pixi-tween is a plugin for Pixi.js v3.0.8 or higher to create tween animations.

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

### How it works
This plugin add a new namespace names `tween` to the PIXI namespace, and this new namespace has 3 new classes Tween, TweenPath and TweenManager, also add an Easing object. And create an instance for TweenManager in PIXI.tweenManager, but all you need is add PIXI.tweenManager.update() in your requestAnimationFrame. You can pass as params for `PIXI.tweenManager.update(delta)` your own delta time, if you don't pass anything it will be calculated internally, for max accuracy calculating the delta time you can use the [AnimationLoop](https://github.com/Nazariglez/pixi-animationloop/) plugin.

When a tween is ended, the instance will kept in the memory and in the tweenManager, but you can prevent this if you set .expire = true in the tween.

#### Using AnimationLoop
```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

var animationLoop = new PIXI.AnimationLoop(renderer);

//Add a postrender or prerender event to add the tween.update in the raf.
animationLoop.on('postrender', function(){
  PIXI.tweenManager.update(this.delta); //Pass as param the delta time to PIXI.tweenManager.update
});

animationLoop.start();
```

### Events
Tween extends from [PIXI.utils.EventEmitter](https://github.com/primus/eventemitter3), and emit some events: start, end, repeat, update, stop and pingpong. More info: [Node.js Events](https://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2)

- __start - callback()__: Fired when the tween starts. If the tween has a delay, this event fires when the delay time is ended.
- __end - callback()__: Fired when the tween is over. If the .loop option it's true, this event never will be fired, and if the tween has an .repeat number, this event will be fired just when all the repeats are done.
- __repeat - callback(repeat)__: Fired at every repeat cycle, if your tween has .repeat=5 this events will be fired 5 times.
- __update - callback(elapsedTime)__: Fired at each frame.
- __stop - callback()__: Fired only when it's used the .stop() method. It's useful to know when a timer is cancelled.
- __pingpong - callback()__: If the pingPong option it's true, this events will be fired when the tweens returns back.

### Paths
Move an object along a path it's easy with TweenPath. TweenPath use a similar PIXI.Graphics API to create paths, and once it's created our path we just need to add it to a tween with .path = ourPathCreated.

If you need draw your path (useful to debug), PIXI.Graphics has been enhanced with a new method named .drawPath(path). Use it the same way like .drawRectanle, .drawShape, etc...

### Examples
See the [Examples](https://github.com/Nazariglez/pixi-tween/tree/master/examples) folder.

## API
### TweenManager
#### constructor()
The constructor
#### .tweens
An array with the tweens created
#### .update( delta )
The update method, make sure it is in the raf. You can pass a fixed delta time (like 0.016), your own calculated delta, or nothing. (Delta time in seconds not milliseconds).
#### .removeTween( tween )
Remove a tween from the .tweens array in the next frame.
#### .addTween( tween )
Normally you want to use .createTween(target) to create a tween, but, you can also create a tween with new PIXI.Tween(target) and add it in the manager with this method.  
#### .createTween( target )
Return a new instance of PIXI.Tween managed by this tweenManager.
#### .getTweensForTarget( target )
Return an array with all the tweens for the given target.

### TweenPath
#### constructor()
The constructor
#### .moveTo( x, y )
See [PIXI.Graphics#moveTo](https://pixijs.github.io/docs/PIXI.Graphics.html#moveTo)
#### .lineTo( x, y )
See [PIXI.Graphics#lineTo](https://pixijs.github.io/docs/PIXI.Graphics.html#lineTo)
#### .bezierCurveTo( cpX, cpY, cpX2, cpY2, toX, toY )
See [PIXI.Graphics#bezierCurveTo](https://pixijs.github.io/docs/PIXI.Graphics.html#bezierCurveTo)
#### .quadraticCurveTo( cpX, cpY, toX, toY )
See [PIXI.Graphics#quadraticCurveTo](https://pixijs.github.io/docs/PIXI.Graphics.html#quadraticCurveTo)
#### .arcTo( x1, y1, x2, y2, radius )
See [PIXI.Graphics#arcTo](https://pixijs.github.io/docs/PIXI.Graphics.html#arcTo)
#### .arc( cx, cy, radius, startAngle, endAngle, anticlockwise )
See [PIXI.Graphics#arc](https://pixijs.github.io/docs/PIXI.Graphics.html#arc)
#### .drawShape( shape )
See [PIXI.Graphics#drawShape](https://pixijs.github.io/docs/PIXI.Graphics.html#drawShape)
#### .clear()
Clear the path.
#### .closed
Set true to close your path.
#### .length
Get the points number

### Tween
