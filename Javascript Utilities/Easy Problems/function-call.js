
// https://www.greatfrontend.com/questions/javascript/function-call

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.apply(thisArg, argArray);
};