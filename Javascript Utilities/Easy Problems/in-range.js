
// https://www.greatfrontend.com/questions/javascript/in-range

/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export default function inRange(value, start, end) {
  if(!end){
   end = start;
   start = 0;
  }
  if((start < 0 && end < 0) || (start > end)){
    [start, end] = [end, start];
  }
  
  return (value >= start && value < end);
}