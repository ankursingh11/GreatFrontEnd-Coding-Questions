
// https://www.greatfrontend.com/questions/javascript/debounce

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId;
  return function(...args){
    let context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}