
// https://www.greatfrontend.com/questions/javascript/debounce-ii

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {

  let timerId = null;
  let context = undefined;
  let agrsToInvoke = undefined;

  function clearTimer(){
    clearTimeout(timerId);
    timerId = null;
  }

  function invoke(){
    if(timerId === null) return;
    clearTimer();
    func.apply(context, agrsToInvoke);
  }
  
  function fn(...args){
    // clear any timeout
    clearTimer();
    context = this;
    agrsToInvoke = args;
    timerId = setTimeout(() => {
      // invoke func with args
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;
  fn.flush = invoke;
  return fn;
}