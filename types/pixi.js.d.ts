export module PIXI {
    export const tweenManager: tween.TweenManager;
    
    export class Graphics {
        drawPath(path: TweenPath): PIXI.Graphics;
    }

    export module tween {
        {{{ CLASS }}}
    };
}

declare module "pixi-tween" {
    export default PIXI.tween;
}