import PIXI from'pixi.js';
import TweenManager from './TweenManager';
import Tween from './Tween';
import Easing from './Easing';

if(!PIXI.TweenManager){
  let tweenManager = new TweenManager();

  PIXI.TweenManager = TweenManager;
  PIXI.Tween = Tween;
  PIXI.Easing = Easing;
  PIXI.tween = tweenManager;
}
export default PIXI.tween;
