
// https://www.greatfrontend.com/questions/javascript/intersection-with

/**
 * @param {Function} comparator - The comparator function used to determine equality between elements.
 * @param {...Array} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the elements that are present in all given arrays.
 */
export default function intersectionWith(comparator, ...arrays) {
  
  if(arrays.length === 0) return [];

  const firstArray = arrays[0];
  const remaining = arrays.slice(1);
  const ans = firstArray.filter(ele => remaining.every(arr => arr.some(arrItem => comparator(ele, arrItem))));
  return ans;
}