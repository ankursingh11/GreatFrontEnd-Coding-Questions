/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  
  const hasInitialValue = (initialValue === undefined);
  const len = this.length;
  if(hasInitialValue && len === 0){
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = hasInitialValue ? this[0] : initialValue;
  let startingIndex = hasInitialValue ? 1 : 0;
  for(let i = startingIndex; i < len; i++){
    if(Object.hasOwn(this, i)){
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};