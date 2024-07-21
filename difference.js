
// https://www.greatfrontend.com/questions/javascript/difference

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
  const s = new Set(values.map(value => String(value)));

  const ans = array.filter(num => {
    if(!s.has(String(num))) return String(num);
  })

  return ans;
}