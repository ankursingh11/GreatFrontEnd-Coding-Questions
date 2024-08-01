
// https://www.greatfrontend.com/questions/javascript/union-by

/**
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {...Array} arrays Array from which the elements are all numbers.
 * @return {Array} Returns the new array of combined values.
 */
export default function unionBy(iteratee, ...arrays) {
  const result = [];
  if(arrays.length === 0) return result;

  const set = new Set();
  arrays.forEach(arr => arr.forEach(ele => {
    if(!set.has(iteratee(ele))){
      set.add(iteratee(ele));
      result.push(ele);
    }
  }))
  return result;
}