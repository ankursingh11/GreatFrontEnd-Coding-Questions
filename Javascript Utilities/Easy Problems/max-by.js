
// https://www.greatfrontend.com/questions/javascript/max-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
  let maxValue;
  let maxEle;
  array.forEach(ele => {
    const value = iteratee(ele);
    if(value && ( !maxEle || value > maxValue)){
      maxValue = value;
      maxEle = ele;
    }
  })
  return maxEle;
}