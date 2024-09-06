
// https://www.greatfrontend.com/questions/javascript/intersection-by

/**
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersectionBy(iteratee, ...arrays) {
  if(!arrays.length) return [];

  // apply iteratee function to each element of the arrays
  const mappedArrays = arrays.map(arr => arr.map(iteratee));

  // consdiering first array of mappedArrays as base
  // find the value which exists in all other arrays
  let intersectedValues = mappedArrays[0].filter(ele => mappedArrays.every(arr=> arr.includes(ele)));
  
  // find distinct unique values
  intersectedValues = intersectedValues.filter((ele, index, self) => self.indexOf(ele) === index);
  
  // find the original elements before the iteratee
  // function is applied
  const ans = intersectedValues.map(ele => {
    let index = mappedArrays[0].indexOf(ele);
    return arrays[0][index];
  })
  return ans;
}