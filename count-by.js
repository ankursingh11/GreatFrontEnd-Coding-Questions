
// https://www.greatfrontend.com/questions/javascript/count-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const result = {};
  array.forEach(ele => {
    let key = iteratee(ele);
    if(key in result) result[key]++;
    else result[key] = 1;
  })
  
  return result;
}