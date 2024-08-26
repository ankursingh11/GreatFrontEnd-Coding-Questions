
// https://www.greatfrontend.com/questions/javascript/mean

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  let length = array.length;
  let sum = array.reduce((acc, curr) => acc+curr, 0);
  return (sum/length);

}