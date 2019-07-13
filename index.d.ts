export module PIXI {
    export const tweenManager: tween.TweenManager;
    
    export class Graphics {
        drawPath(path: TweenPath): PIXI.Graphics;
    }

    export module tween {
        export default class Tween extends PIXI.utils.EventEmitter {
    target: any;
    private _manager;
    private _chainTween;
    private _to;
    private _from;
    private _delayTime;
    private _elapsedTime;
    private _repeat;
    private _pingPong;
    active: boolean;
    time: number;
    easing: Ease;
    expire: boolean;
    repeat: number;
    delay: number;
    loop: boolean;
    pingPong: boolean;
    isStarted: boolean;
    isEnded: boolean;
    path: TweenPath;
    pathReverse: boolean;
    pathFrom: number;
    pathTo: number;
    constructor(target: any, manager?: TweenManager);
    chain(tween?: Tween): Tween;
    start(): Tween;
    stop(): Tween;
    to(data: any): Tween;
    from(data: any): Tween;
    remove(): Tween;
    clear(): void;
    reset(): Tween;
    update(delta: number, deltaMS: number): void;
    _parseData(): void;
    _apply(time: any): void;
    _canUpdate(): boolean;
    manager: TweenManager;
}

export default class TweenManager {
    tweens: Tween[];
    private _tweensToDelete;
    private _last;
    constructor();
    update(delta: number): void;
    getTweensForTarget(target: any): Tween[];
    createTween(target: any): Tween;
    addTween(tween: Tween): void;
    removeTween(tween: Tween): void;
    _remove(tween: Tween): void;
    _getDeltaMS(): number;
}

export default class TweenPath {
    private _closed;
    private _tmpPoint;
    private _tmpPoint2;
    private _tmpDistance;
    polygon: PIXI.Polygon;
    currentPath: TweenPath;
    graphicsData: any[];
    dirty: boolean;
    constructor();
    moveTo(x: number, y: number): TweenPath;
    lineTo(x: number, y: number): TweenPath;
    bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): TweenPath;
    quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): TweenPath;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): TweenPath;
    arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number): TweenPath;
    drawShape(shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle): TweenPath;
    getPoint(num: number): PIXI.Point;
    distanceBetween(num1: number, num2: number): number;
    totalDistance(): number;
    getPointAt(num: number): PIXI.Point;
    getPointAtDistance(distance: number): PIXI.Point;
    parsePoints(): TweenPath;
    clear(): TweenPath;
    closed: boolean;
    readonly length: number;
}

export declare type Ease = (number: any) => number;
export declare class Easing {
    static linear(): Ease;
    static inQuad(): Ease;
    static outQuad(): Ease;
    static inOutQuad(): Ease;
    static inCubic(): Ease;
    static outCubic(): Ease;
    static inOutCubic(): Ease;
    static inQuart(): Ease;
    static outQuart(): Ease;
    static inOutQuart(): Ease;
    static inQuint(): Ease;
    static outQuint(): Ease;
    static inOutQuint(): Ease;
    static inSine(): Ease;
    static outSine(): Ease;
    static inOutSine(): Ease;
    static inExpo(): Ease;
    static outExpo(): Ease;
    static inOutExpo(): Ease;
    static inCirc(): Ease;
    static outCirc(): Ease;
    static inOutCirc(): Ease;
    static inElastic(a?: number, p?: number): Ease;
    static outElastic(a?: number, p?: number): Ease;
    static inOutElastic(a?: number, p?: number): Ease;
    static inBack(v: number): Ease;
    static outBack(v: number): Ease;
    static inOutBack(v: number): Ease;
    static inBounce(): Ease;
    static outBounce(): Ease;
    static inOutBounce(): Ease;
}

    };
}

declare module "pixi-tween" {
    export default PIXI.tween;
}