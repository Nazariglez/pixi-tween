export type Ease = (number) => number;

export class Easing {
    static linear(): Ease {
        return function (t: number) {
            return t;
        };
    }

    static inQuad(): Ease {
        return function (t: number) {
            return t * t;
        };
    }

    static outQuad(): Ease {
        return function (t: number) {
            return t * (2 - t);
        };
    }

    static inOutQuad(): Ease {
        return function (t: number) {
            t *= 2;
            if (t < 1) return 0.5 * t * t;
            return - 0.5 * (--t * (t - 2) - 1);
        };
    }

    static inCubic(): Ease {
        return function (t: number) {
            return t * t * t;
        };
    }

    static outCubic(): Ease {
        return function (t: number) {
            return --t * t * t + 1;
        };
    }

    static inOutCubic(): Ease {
        return function (t: number) {
            t *= 2;
            if (t < 1) return 0.5 * t * t * t;
            t -= 2
            return 0.5 * (t * t * t + 2);
        };
    }

    static inQuart(): Ease {
        return function (t: number) {
            return t * t * t * t;
        };
    }

    static outQuart(): Ease {
        return function (t: number) {
            return 1 - (--t * t * t * t);
        };
    }

    static inOutQuart(): Ease {
        return function (t: number) {
            t *= 2;
            if (t < 1) return 0.5 * t * t * t * t;
            t -= 2;
            return - 0.5 * (t * t * t * t - 2);
        };
    }

    static inQuint(): Ease {
        return function (t: number) {
            return t * t * t * t * t;
        };
    }

    static outQuint(): Ease {
        return function (t: number) {
            return --t * t * t * t * t + 1;
        };
    }

    static inOutQuint(): Ease {
        return function (t: number) {
            t *= 2;
            if (t < 1) return 0.5 * t * t * t * t * t;
            t -= 2;
            return 0.5 * (t * t * t * t * t + 2);
        };
    }

    static inSine(): Ease {
        return function (t: number) {
            return 1 - Math.cos(t * Math.PI / 2);
        };
    }

    static outSine(): Ease {
        return function (t: number) {
            return Math.sin(t * Math.PI / 2);
        };
    }

    static inOutSine(): Ease {
        return function (t: number) {
            return 0.5 * (1 - Math.cos(Math.PI * t));
        };
    }

    static inExpo(): Ease {
        return function (t: number) {
            return t === 0 ? 0 : Math.pow(1024, t - 1);
        };
    }

    static outExpo(): Ease {
        return function (t: number) {
            return t === 1 ? 1 : 1 - Math.pow(2, - 10 * t);
        };
    }

    static inOutExpo(): Ease {
        return function (t: number) {
            if (t === 0) return 0;
            if (t === 1) return 1;
            t *= 2;
            if (t < 1) return 0.5 * Math.pow(1024, t - 1);
            return 0.5 * (- Math.pow(2, - 10 * (t - 1)) + 2);
        };
    }

    static inCirc(): Ease {
        return function (t: number) {
            return 1 - Math.sqrt(1 - t * t);
        };
    }

    static outCirc(): Ease {
        return function (t: number) {
            return Math.sqrt(1 - (--t * t));
        };
    }

    static inOutCirc(): Ease {
        return function (t: number) {
            t *= 2
            if (t < 1) return - 0.5 * (Math.sqrt(1 - t * t) - 1);
            return 0.5 * (Math.sqrt(1 - (t - 2) * (t - 2)) + 1);
        };
    }


    static inElastic(a: number = 0.1, p: number = 0.4): Ease {
        return function (t: number) {
            let s;
            if (t === 0) return 0;
            if (t === 1) return 1;
            if (!a || a < 1) { a = 1; s = p / 4; }
            else s = p * Math.asin(1 / a) / (2 * Math.PI);
            return - (a * Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1) - s) * (2 * Math.PI) / p));
        };
    }

    static outElastic(a: number = 0.1, p: number = 0.4): Ease {
        return function (t: number) {
            let s;
            if (t === 0) return 0;
            if (t === 1) return 1;
            if (!a || a < 1) { a = 1; s = p / 4; }
            else s = p * Math.asin(1 / a) / (2 * Math.PI);
            return (a * Math.pow(2, - 10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1);
        };
    }

    static inOutElastic(a: number = 0.1, p: number = 0.4): Ease {
        return function (t: number) {
            let s;
            if (t === 0) return 0;
            if (t === 1) return 1;
            if (!a || a < 1) { a = 1; s = p / 4; }
            else s = p * Math.asin(1 / a) / (2 * Math.PI);
            t *= 2;
            if (t < 1) return - 0.5 * (a * Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1) - s) * (2 * Math.PI) / p));
            return a * Math.pow(2, -10 * (t - 1)) * Math.sin(((t - 1) - s) * (2 * Math.PI) / p) * 0.5 + 1;
        };
    }

    static inBack(v: number): Ease {
        return function (t: number) {
            let s = v || 1.70158;
            return t * t * ((s + 1) * t - s);
        };
    }

    static outBack(v: number): Ease {
        return function (t: number) {
            let s = v || 1.70158;
            return --t * t * ((s + 1) * t + s) + 1;
        };
    }

    static inOutBack(v: number): Ease {
        return function (t: number) {
            let s = (v || 1.70158) * 1.525;
            t *= 2;
            if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
            return 0.5 * ((t - 2) * (t - 2) * ((s + 1) * (t - 2) + s) + 2);
        };
    }

    static inBounce(): Ease {
        return function (t: number) {
            return 1 - Easing.outBounce()(1 - t);
        };
    }

    static outBounce(): Ease {
        return function (t: number) {
            if (t < (1 / 2.75)) {
                return 7.5625 * t * t;
            } else if (t < (2 / 2.75)) {
                t = (t - (1.5 / 2.75));
                return 7.5625 * t * t + 0.75;
            } else if (t < (2.5 / 2.75)) {
                t = (t - (2.25 / 2.75));
                return 7.5625 * t * t + 0.9375;
            } else {
                t -= (2.625 / 2.75);
                return 7.5625 * t * t + 0.984375;
            }
        };
    }

    static inOutBounce(): Ease {
        return function (t: number) {
            if (t < 0.5) return Easing.inBounce()(t * 2) * 0.5;
            return Easing.outBounce()(t * 2 - 1) * 0.5 + 0.5;
        };
    }
};
