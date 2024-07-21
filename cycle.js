
// https://www.greatfrontend.com/questions/javascript/cycle

/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values) {
  let index = 0;
  return function(){
    let currentValue = values[index];
    index = (index+1)%values.length;
    return currentValue;
  }
}