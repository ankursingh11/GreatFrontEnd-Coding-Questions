
// https://www.greatfrontend.com/questions/javascript/difference

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values){
  const result = [];
  array.forEach(ele => {
    if(!values.includes(ele)){
      result.push(ele);
    }
  })
  return result;
}