
// https://www.greatfrontend.com/questions/javascript/unique-array

/**
 * @param {Array} array
 * @return {Array}
 */
export default function uniqueArray(array) {
  const result = [];
  const s = new Set();
  for(let ele of array){
    if(!s.has(ele)) result.push(ele);
    s.add(ele);
  }

  return result;
}