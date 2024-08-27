
// https://www.greatfrontend.com/questions/javascript/compact

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array){
  const result = [];
  array.forEach(ele => {
    if(ele) result.push(ele);
  })
  return result;
}