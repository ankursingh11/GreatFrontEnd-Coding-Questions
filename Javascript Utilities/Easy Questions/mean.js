

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  let len = array.length;
  let sum = array.reduce((curr, acc) => curr + acc, 0);
  return (sum/len);
}