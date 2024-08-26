
// https://www.greatfrontend.com/questions/javascript/make-counter

/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  let count = initialValue;
  return function(){
    return count++;
  }
}