
// https://www.greatfrontend.com/questions/javascript/find-last-index

/**
 * This function returns the index of the last element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1,
) {
  let len = array.length;
  if(fromIndex < 0){
    fromIndex = Math.max(0, fromIndex+len);
  }
  if(fromIndex > len) fromIndex = len-1;
  
  for(let i = fromIndex; i >= 0; i--){
    if(predicate(array[i], i, array)) return i;
  }
  return -1;
  
}