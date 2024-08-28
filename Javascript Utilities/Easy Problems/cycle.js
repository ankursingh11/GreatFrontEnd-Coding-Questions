
// https://www.greatfrontend.com/questions/javascript/cycle

/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values) {
  let i = 0;
  return function(){
    let value = values[i];
    i = (i+1)%values.length;
    return value;
  }
}