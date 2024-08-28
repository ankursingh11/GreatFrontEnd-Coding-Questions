
// https://www.greatfrontend.com/questions/javascript/array-map

/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const result = [];
  for(let i = 0; i < this.length; i++){
    if(Object.hasOwn(this, i)){
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return result;
};