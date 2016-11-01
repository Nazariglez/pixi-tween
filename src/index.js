import * as PIXI from 'pixi.js';

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

let tween = {
  TweenManager: TweenManager,
  Tween: Tween,
  Easing: Easing,
  TweenPath: TweenPath
};

if(!PIXI.tweenManager){
  PIXI.tweenManager = new TweenManager();

  PIXI.tween = tween;
}
export default tween;
