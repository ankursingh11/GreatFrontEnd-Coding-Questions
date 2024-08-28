
// https://www.greatfrontend.com/questions/javascript/range-right

/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
export default function rangeRight(start = 0, end, step = 1) {
  const result = [];
  if(!end){
    end = start;
    start = 0;
  }
  if(end < start && step === 1){
    step = -1;
  }
  const count = (end-start)/(step || 1);
  let num = start;
  for(let i = 0; i < count; i++){
    result.push(num);
    num+=step;
  }
  result.reverse();
  return result;
}