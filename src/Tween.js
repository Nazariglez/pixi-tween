import PIXI from 'pixi.js';
import Easing from './Easing';

export default class Tween extends PIXI.utlis.EventEmitter{
  constructor(target, manager){
    super();
    this.target = target;
    if(manager)this.addTo(manager);

    this.time = 0;
    this.active = false;
    this.easing = Easing.linear();
    this.expire = false;
    this.repeat = 0;
    this.loop = false;
    this.delay = 0;
    this.pingPong = false;
    this.isStarted = false;
    this.isEnded = false;

    this._to = null;
    this._from = null;
    this._delayTime = 0;
    this._elapsedTime = 0;
    this._repeat = 0;
    this._pingPong = false;

    this._chainTween = null;

    this.path = null;
    this.pathReverse = false;
    this.pathFrom = 0;
    this.pathTo = 0;
  }

  addTo(manager){
    this.manager = manager;
    this.manager.addTween(this);
    return this;
  }

  chain(tween){
    if(!tween)tween = new Tween(this.target);
    this._chainTween = tween;
    return tween;
  }

  start(){
    this.active = true;
    return this;
  }

  stop(){
    this.active = false;
    this.emit('stop');
    return this;
  }

  to(data){
    this._to = data;
    return this;
  }

  from(data){
    this._from = data;
    return this;
  }

  remove(){
    if(!this.manager)return this;
    this.manager.removeTween(this);
    return this;
  }

  reset(){
    this._elapsedTime = 0;
    this._repeat = 0;
    this._delayTime = 0;
    this.isStarted = false;
    this.isEnded = false;

    if(this.pingPong&&this._pingPong){
      let _to = this._to;
      let _from = this._from;
      this._to = _from;
      this._from = _to;

      this._pingPong = false;
    }

    return this;
  }


}

function _recursiveApplyTween(to, from, target, time, elapsed, easing){
  for(let k in to){
    if(!_isObject(to[k])){
      let b = from[k];
      let c = to[k] - from[k];
      let d = time;
      let t = elapsed/d;

      target[k] = b+(c*easing(t));
    }else{
      _recursiveApplyTween(to[k], from[k], target[k], time, elapsed, easing);
    }
  }
}

function _parseRecursiveData(to, from, target){
  for(let k in to){
    if(from[k] !== 0 && !from[k]){
      if(_isObject(target(k))){
        from[k] = JSON.parse(JSON.stringify(target[k]));
        _parseRecursiveData(to[k], from[k], target[k]);
      }else{
        from[k] = target[k];
      }
    }
  }
}

function _isObject(obj){
  return Object.prototype.toString.call(obj) === "[object Object]";
}
