
// https://www.greatfrontend.com/questions/javascript/min-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  let minValue;
  let minEle;
  array.forEach(ele => {
    let value = iteratee(ele);
    if(value && (!minEle || value < minValue)){
      minValue = value;
      minEle = ele;
    }
  })
  return minEle;
}
