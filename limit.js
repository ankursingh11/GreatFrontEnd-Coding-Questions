
// https://www.greatfrontend.com/questions/javascript/limit

/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let i = 0;
  let result;
  return function(...args){
    if(i < n){
      result = func.call(this, ...args);
      i++;
    }
    return result;
  }
}