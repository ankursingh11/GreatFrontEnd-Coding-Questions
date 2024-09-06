
// https://www.greatfrontend.com/questions/javascript/throttle

/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let shouldThrottle = false;
  let timerId = null;
  return function(...args){
    if(shouldThrottle) return;

    shouldThrottle = true;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      shouldThrottle = false;
    }, wait);
    func.apply(this, args);
  }
}