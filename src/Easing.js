const Easing = {
  linear: function(){
    return function(k){
      return k;
    };
  },

  inQuad: function(){
    return function(k){
      return k*k;
    };
  },

  outQuad: function(){
    return function(k){
      return k*(2-k);
    };
  },

  inOutQuad: function(){
    return function(k){
      k *= 2;
      if ( k < 1 ) return 0.5 * k * k;
      return - 0.5 * ( --k * ( k - 2 ) - 1 );
    };
  },

  inCubic: function(){
    return function (k) {
      return k * k * k;
    };
  },

  outCubic: function(){
    return function(k){
      return --k * k * k + 1;
    };
  },

  inOutCubic: function(){
    return function(k){
      k *= 2;
      if ( k < 1 ) return 0.5 * k * k * k;
      k -= 2
      return 0.5 * ( k * k * k + 2 );
    };
  },

  inQuart: function(){
    return function(k){
      return k * k * k * k;
    };
  },

  outQuart: function(){
    return function(k){
      return 1 - ( --k * k * k * k );
    };
  },

  inOutQuart: function(){
    return function(k){
      k *= 2;
      if ( k < 1) return 0.5 * k * k * k * k;
      k -= 2;
      return - 0.5 * ( k * k * k * k - 2 );
    };
  },

  inQuint: function(){
    return function(k){
      return k * k * k * k * k;
    };
  },

  outQuint: function(){
    return function(k){
      return --k * k * k * k * k + 1;
    };
  },

  inOutQuint: function(){
    return function(k){
      k *= 2;
      if ( k < 1 ) return 0.5 * k * k * k * k * k;
      k -= 2;
      return 0.5 * ( k * k * k * k * k + 2 );
    };
  },

  inSine: function(){
    return function(k){
      return 1 - Math.cos( k * Math.PI / 2 );
    };
  },

  outSine: function(){
    return function(k){
      return Math.sin( k * Math.PI / 2 );
    };
  },

  inOutSine: function(){
    return function(k){
      return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
    };
  },

  inExpo: function(){
    return function(k){
      return k === 0 ? 0 : Math.pow( 1024, k - 1 );
    };
  },

  outExpo: function(){
    return function(k){
      return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
    };
  },

  inOutExpo: function(){
    return function(k){
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      k *= 2;
      if ( k < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
      return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
    };
  },

  inCirc: function(){
    return function(k){
      return 1 - Math.sqrt( 1 - k * k );
    };
  },

  outCirc: function(){
    return function(k){
      return Math.sqrt( 1 - ( --k * k ) );
    };
  },

  inOutCirc: function(){
    return function(k){
      k *= 2
      if ( k < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
      return 0.5 * ( Math.sqrt( 1 - (k - 2) * (k - 2)) + 1);
    };
  },


  inElastic: function(){
    return function(k){
      let s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      return - ( a * Math.pow( 2, 10 * (k-1) ) * Math.sin( ( (k-1) - s ) * ( 2 * Math.PI ) / p ) );
    };
  },

  outElastic: function(){
    return function(k){
      let s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
    };
  },

  inOutElastic: function(){
    return function(k){
      let s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      k *= 2;
      if ( k < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k - 1 ) ) * Math.sin( ( (k-1) - s ) * ( 2 * Math.PI ) / p ) );
      return a * Math.pow( 2, -10 * ( k - 1 ) ) * Math.sin( ( (k-1) - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
    };
  },

  inBack: function(v){
    return function(k){
      let s = v || 1.70158;
      return k * k * ( ( s + 1 ) * k - s );
    };
  },

  outBack: function(v){
    return function(k){
      let s = v || 1.70158;
      return --k * k * ( ( s + 1 ) * k + s ) + 1;
    };
  },

  inOutBack: function(v){
    return function(k){
      let s =  (v || 1.70158) * 1.525;
      k *= 2;
      if ( k < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
      return 0.5 * ( ( k - 2 ) * (k-2) * ( ( s + 1 ) * (k-2) + s ) + 2 );
    };
  },

  inBounce: function(){
    return function(k){
      return 1 - Easing.outBounce()( 1 - k );
    };
  },

  outBounce: function(){
    return function(k){
      if ( k < ( 1 / 2.75 ) ) {
        return 7.5625 * k * k;
      } else if ( k < ( 2 / 2.75 ) ) {
        k = ( k - ( 1.5 / 2.75 ) );
        return 7.5625 * k * k + 0.75;
      } else if ( k < ( 2.5 / 2.75 ) ) {
        k = (k - ( 2.25 / 2.75 ));
        return 7.5625 * k * k + 0.9375;
      } else {
        k -= ( 2.625 / 2.75 );
        return 7.5625 * k * k + 0.984375;
      }
    };
  },

  inOutBounce: function(){
    return function(k){
      if ( k < 0.5 ) return Easing.inBounce()( k * 2 ) * 0.5;
      return Easing.outBounce()( k * 2 - 1 ) * 0.5 + 0.5;
    };
  }
};

export default Easing;
