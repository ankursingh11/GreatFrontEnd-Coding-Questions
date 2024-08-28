
// https://www.greatfrontend.com/questions/javascript/sum

/**
 * @param {number} value
 * @return {Function}
 */
export default function sum(value) {
  return function(b){
    if(b != null) return sum(value + b);
    return value;
  }
}