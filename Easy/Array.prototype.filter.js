
// https://www.greatfrontend.com/questions/javascript/array-filter

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, this[i], i, this)) result.push(this[i]);
  }

  return result;
};