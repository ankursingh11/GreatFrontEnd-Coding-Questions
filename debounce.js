
// https://www.greatfrontend.com/questions/javascript/debounce

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timeoutId;
  return function(...args){
    let context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
      func.apply(context, args);
    }, wait)
  }
}