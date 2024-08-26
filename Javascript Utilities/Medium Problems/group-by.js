
// https://www.greatfrontend.com/questions/javascript/group-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
  const result = {};
  array.forEach(ele => {
    let key = iteratee(ele);
    if(key in result) result[key].push(ele);
    else result[key] = [ele];
  })
  
  return result;
}