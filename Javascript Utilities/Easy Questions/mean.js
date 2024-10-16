
// https://www.greatfrontend.com/questions/javascript/mean

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  let size = array.length;
  if(size === 0) return NaN;
  let sum = array.reduce((acc, ele) => acc+ele, 0);
  return (sum/size);
}