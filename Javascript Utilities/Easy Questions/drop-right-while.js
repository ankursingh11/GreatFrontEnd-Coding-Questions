
// https://www.greatfrontend.com/questions/javascript/drop-right-while

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropRightWhile(array, predicate) {
  let len = array.length;
  const result = [...array];
  let i = len-1;
  for(; i >= 0 ; i--){
    if(!predicate(result[i], i, result)) break;
  }
  return result.splice(0, i+1);
}