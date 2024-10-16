
// https://www.greatfrontend.com/questions/javascript/fill

/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  let size = array.length;
  if(start < 0){
    start = Math.max(0, size+start);
  }
  if(end < 0){
    end = Math.max(0, size+end);
  }
  if(start >= size && end >= size){
    return array;
  }
  if(start < size && end >= size){
    end = size;
  }
  for(let i = start; i < end; i++){
    array[i] = value;
  }
  return array;
}