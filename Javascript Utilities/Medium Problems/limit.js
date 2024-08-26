
// https://www.greatfrontend.com/questions/javascript/limit

/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let count = 0;
  let result;
  return function(...arg){
    if(count < n){
      result = func.apply(this, arg);
      count++;
    }
    return result;
  }
}