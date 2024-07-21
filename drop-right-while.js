
// https://www.greatfrontend.com/questions/javascript/drop-right-while

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropRightWhile(array, predicate) {
  
  let i = array.length-1;
  for( ; i >= 0; i--){
    if(!predicate(array[i], i, array)) break;
  }
  const result = array.slice(0, i+1);
  return result;
}