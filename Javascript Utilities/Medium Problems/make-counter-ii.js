
// https://www.greatfrontend.com/questions/javascript/make-counter-ii

/**
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */
export default function makeCounter(initialValue = 0) {
  let count = initialValue;
  return {
    get : function(){
      return count;
    },
    increment : function(){
      count++;
      return count;
    },
    decrement : function(){
      count--;
      return count;
    },
    reset : function(){
      count = initialValue;
      return count;
    }
  }
}