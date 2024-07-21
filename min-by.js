
// https://www.greatfrontend.com/questions/javascript/min-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function minBy(array, iteratee) {
  
  let result, maxValue;

  for(const ele of array){
    let current = iteratee(ele);

    if(current && (!maxValue || current < maxValue)){
      maxValue = current;
      result = ele;
    }
  }

  return result;
}