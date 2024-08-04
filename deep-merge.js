
// https://www.greatfrontend.com/questions/javascript/deep-merge

/**
 * @param {Object|Array} valA
 * @param {Object|Array} valB
 * @returns Object|Array
 */

const isPlainObject = (value) => {
  if(!value) return false;

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

export default function deepMerge(valA, valB) {
  if(Array.isArray(valA) && Array.isArray(valB)){
    return [...valA, ...valB];
  }

  if(isPlainObject(valA) && isPlainObject(valB)){
    const newObj = {...valA};
    for(const key in valB){
      if(Object.prototype.hasOwnProperty.call(valA, key)){
        newObj[key] = deepMerge(valA[key], valB[key]);
      }else newObj[key] = valB[key];
    }
    return newObj;
  }

  return valB;
}