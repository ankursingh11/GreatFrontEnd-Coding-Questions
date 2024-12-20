
/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
  const dummy = [...array];
  const result = [];
  while(dummy.length > 0){
    result.push(dummy.splice(0, size));
  }
  return result;
}