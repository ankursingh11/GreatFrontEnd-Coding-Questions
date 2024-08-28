
// https://www.greatfrontend.com/questions/javascript/function-bind

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  let context = this;
  return function(...args2){
    return context.apply(thisArg, [...argArray, ...args2]);
  }
};