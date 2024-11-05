
// https://www.greatfrontend.com/questions/javascript/drop-while

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropWhile(array, predicate) {
  let len = array.length;
  const result = [...array];
  
  for(let i = 0; i < len; i++){
    if(!predicate(result[i], i, result)) break;
  }
  return result.splice(i);
}