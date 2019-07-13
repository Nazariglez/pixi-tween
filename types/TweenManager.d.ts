import Tween from './Tween';
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
