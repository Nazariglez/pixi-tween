import PIXI from'pixi.js';
import TweenManager from './TweenManager';
import Tween from './Tween';
import TweenPath from './TweenPath';
import Easing from './Easing';

//extend pixi graphics to draw tweenPaths
PIXI.Graphics.prototype.drawPath = function(path){
  path.parsePoints();
  this.drawShape(path.polygon);
  return this;
}

if(!PIXI.TweenManager){
  let tweenManager = new TweenManager();

  PIXI.TweenManager = TweenManager;
  PIXI.Tween = Tween;
  PIXI.Easing = Easing;
  PIXI.TweenPath = TweenPath;
  PIXI.tween = tweenManager;
}
export default PIXI.tween;
