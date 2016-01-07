import Tween from './Tween';

export default class TweenManager {
  constructor(){
      this.tweens = [];
      this._tweensToDelete = [];

      this._last = 0;
  }

  update(delta){
    let deltaMS;
    if(!delta && delta !== 0){
      deltaMS = this._getDeltaMS();
      delta = deltaMS/1000;
    }else{
      deltaMS = delta*1000;
    }

    for(let i = 0; i < this.tweens.length; i++){
      let tween = this.tweens[i];
      if(tween.active){
        tween.update(delta, deltaMS);
        if(tween.isEnded && tween.expire){
          tween.remove();
        }
      }
    }

    if(this._tweensToDelete.length){
      for(let i = 0; i < this._tweensToDelete.length; i++) this._remove(this._tweensToDelete[i]);
      this._tweensToDelete.length = 0;
    }
  }

  getTweensForTarget(target){
    let tweens = [];
    for(let i = 0; i < this.tweens.length; i++){
      if(this.tweens[i].target === target)tweens.push(this.tweens[i]);
    }

    return tweens;
  }

  createTween(target){
    return new Tween(target, this);
  }

  addTween(tween){
    tween.manager = this;
    this.tweens.push(tween);
  }

  removeTween(tween){
    this._tweensToDelete.push(tween);
  }

  _remove(tween){
    let index = this.tweens.indexOf(tween);
    if(index !== -1)this.tweens.splice(index, 1);
  }

  _getDeltaMS(){
    if(this._last === 0)this._last = Date.now();
    let now = Date.now();
    let deltaMS = now-this._last;
    this._last = now;
    return deltaMS;
  }
}
