import TweenManager from './TweenManager';
import Tween from './Tween';
import TweenPath from './TweenPath';
import { Easing } from './Easing';
declare const tween: {
    TweenManager: typeof TweenManager;
    Tween: typeof Tween;
    Easing: typeof Easing;
    TweenPath: typeof TweenPath;
};
export default tween;
