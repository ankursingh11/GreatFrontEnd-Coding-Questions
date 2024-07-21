
// https://www.greatfrontend.com/questions/javascript/make-counter-ii

/**
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */
export default function makeCounter(initialValue = 0) {
  let counter = initialValue;

  function increment(){
    counter++;
    return counter;
  }

  function decrement(){
    counter--;
    return counter;
  }

  function get(){
    return counter;
  }

  function reset(){
    counter = initialValue;
    return counter;
  }

  return {get, increment, decrement, reset};
}