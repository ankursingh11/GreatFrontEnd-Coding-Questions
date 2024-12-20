
// https://www.greatfrontend.com/questions/javascript/intersection

/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
  const set = new Set(arrays[0]);
  for(let i = 0; i < arrays.length; i++){
    set.forEach(ele => {
      if(!arrays[i].includes(ele)) set.delete(ele);
    })
  }
  return Array.from(set);
}