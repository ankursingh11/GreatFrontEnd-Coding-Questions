
// https://www.greatfrontend.com/questions/javascript/function-bind

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
    let context = this;
    return function(...argArray2){
      return context.apply(thisArg, [...argArray, ...argArray2]);
    }
  };