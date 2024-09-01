
// https://www.greatfrontend.com/questions/javascript/deep-merge

/**
 * @param {Object|Array} valA
 * @param {Object|Array} valB
 * @returns Object|Array
 */

const isPlainObject = (val) => {
  if(!val) return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto === Object.prototype;
}


export default function deepMerge(valA, valB) {
  
  if(Array.isArray(valA) && Array.isArray(valB)){
    return [...valA, ...valB];
  }

  if(isPlainObject(valA) && isPlainObject(valB)){
    let result = {...valA};
    for(const key in valB){
      // check if the same key exists in valA
      if(Object.prototype.hasOwnProperty.call(valA, key)){
        result[key] = deepMerge(valA[key], valB[key]);
      }else result[key] = valB[key];
    }
    return result;
  }

  return valB;
}