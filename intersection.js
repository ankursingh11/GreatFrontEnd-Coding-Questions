
// https://www.greatfrontend.com/questions/javascript/intersection

/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
  if(arrays.length === 0) return [];

  const s = new Set(arrays[0]);

  for(let i = 1; i < arrays.length; i++){
    s.forEach(num => {
      if(!arrays[i].includes(num)) s.delete(num);
    })
  }

  return Array.from(s);
}