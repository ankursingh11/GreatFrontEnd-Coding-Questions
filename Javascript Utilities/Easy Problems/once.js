
// https://www.greatfrontend.com/questions/javascript/once

/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
  let ran = true;
  let value;
  return function(...arg){
    if(ran){
      value = func.apply(this, arg);
      ran = false;
    }
    return value;
  }
}