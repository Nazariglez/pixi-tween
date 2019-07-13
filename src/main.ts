import TweenManager from './TweenManager';
import Tween from './Tween';
import TweenPath from './TweenPath';
import { Easing, Ease } from './Easing';

(PIXI.Graphics as any).prototype.drawPath = function(path:TweenPath) : PIXI.Graphics {
    path.parsePoints();
    this.drawShape(path.polygon);
    return this;
}

const tween = {
    TweenManager: TweenManager,
    Tween: Tween,
    Easing: Easing,
    TweenPath: TweenPath
};

export default tween;

(function() {
    if(!(PIXI as any).tweenManager) {
        (PIXI as any).tweenManager = new TweenManager();
        (PIXI as any).tween = tween;
    }
})();