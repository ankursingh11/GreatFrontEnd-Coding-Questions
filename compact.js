
// https://www.greatfrontend.com/questions/javascript/compact

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  const ans = array.filter(num => {
    if(num) return num;
  })
  return ans;
}