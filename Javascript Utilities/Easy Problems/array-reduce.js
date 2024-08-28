
// https://www.greatfrontend.com/questions/javascript/array-reduce/

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = (initialValue !== undefined);
   const len = this.length;
  if(!hasInitialValue && len === 0){
    throw new Error('Reduce of empty array with no initial value');
  }

  let acc = (hasInitialValue) ? initialValue : this[0];
  const startingIndex = (hasInitialValue) ? 0 : 1;
  for(let i = startingIndex; i < this.length; i++){
    if(Object.hasOwn(this, i)){
      acc = callbackFn(acc, this[i], i, this);
    }
  }
  // console.log(acc);
  return acc;
};
