
// https://www.greatfrontend.com/questions/javascript/compose

/**
 * @param {...Function} args
 * @returns Function
 */
export default function compose(...fns) {
  return function(value){
    return fns.reduceRight((acc, fn) => fn(acc), value);
  }
}