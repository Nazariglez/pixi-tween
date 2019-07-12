import Tween from './Tween';

export default class TweenManager {
    tweens: Tween[] = [];
    
    private _tweensToDelete = [];
    private _last: number = 0;

    constructor() { }

    update(delta:number) {
        let deltaMS;
        if (!delta && delta !== 0) {
            deltaMS = this._getDeltaMS();
            delta = deltaMS / 1000;
        } else {
            deltaMS = delta * 1000;
        }

        this.tweens.forEach(tween => {
            if (tween.active) {
                tween.update(delta, deltaMS);
                if (tween.isEnded && tween.expire) {
                    tween.remove();
                }
            }
        });

        if (this._tweensToDelete.length) {
            this._tweensToDelete.forEach(t => this._remove(t));
            this._tweensToDelete.length = 0;
        }
    }

    getTweensForTarget(target:any) : Tween[] {
        return this.tweens.filter(t => t.target === target);
    }

    createTween(target:any) : Tween {
        return new Tween(target, this);
    }

    addTween(tween: Tween) {
        if(tween.manager !== this) {
            tween.manager = this;
        }
        this.tweens.push(tween);
    }

    removeTween(tween: Tween) {
        this._tweensToDelete.push(tween);
    }

    _remove(tween: Tween) {
        let index = this.tweens.indexOf(tween);
        if (index !== -1) {
            this.tweens.splice(index, 1);
        }
    }

    _getDeltaMS() : number {
        if (this._last === 0) {
            this._last = Date.now();
        }

        let now = Date.now();
        let deltaMS = now - this._last;
        this._last = now;
        return deltaMS;
    }
}
