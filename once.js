
// https://www.greatfrontend.com/questions/javascript/once

/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
  let ran = true;
  let result;
  return function(...args){
    if(ran){
      result = func.apply(this, args);
      ran = false;
    }
    return result;
  }
}