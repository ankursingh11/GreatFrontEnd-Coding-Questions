
// https://www.greatfrontend.com/questions/javascript/compact

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(array[i]) result.push(array[i]);
  }
  return result;
}