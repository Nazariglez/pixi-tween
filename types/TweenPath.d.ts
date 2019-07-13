import * as PIXI from 'pixi.js';
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
