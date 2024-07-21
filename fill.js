
// https://www.greatfrontend.com/questions/javascript/fill

/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  let len = array.length;
  if(start < 0) start = len+start;
  if(end < 0) end = len+end;
  if(start > len && end > len) return array;
  if(start === len) return array;
  if(end > len) end = len;
  
  for(let i = start; i < end; i++) array[i] = value;
  return array;
}