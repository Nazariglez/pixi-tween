declare module "pixi.js" {
    export module PIXI {
        export class Graphics {
            drawPath(path: TweenPath): PIXI.Graphics;
        }

        export const tweenManager: TweenManager;
        export const tween: {
            TweenManager: TweenManager,
            Tween: Tween,
            Easing: Easing,
            TweenPath: TweenPath
        };
    }
}