
// https://www.greatfrontend.com/questions/javascript/sum

/**
 * @param {number} value
 * @return {Function}
 */
export default function sum(a) {
  return function(b){
    if(b != null) return sum(a+b);
    else return a;
  }
}