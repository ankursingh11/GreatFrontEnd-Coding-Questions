
// https://www.greatfrontend.com/questions/javascript/drop-while

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropWhile(array, predicate){
  let i = 0;
  for( ; i < array.length; i++){
    if(!predicate(array[i], i, array)) break;
  }
  return array.slice(i);
}
