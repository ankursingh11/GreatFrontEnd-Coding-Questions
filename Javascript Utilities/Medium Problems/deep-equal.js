
// https://www.greatfrontend.com/questions/javascript/deep-equal

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  // for primitive types excluding arrays and object
  if(!valueA || typeof valueA !== 'object'){
    return valueA === valueB;
  }
  if(typeof valueA !== typeof valueB) return false;
  
  // considering inputs are arrays
  if(Array.isArray(valueA) !== Array.isArray(valueB)) return false;
  if(Array.isArray(valueA)){
    if(valueA.length !== valueB.length) return false;
    for(let i = 0; i < valueA.length; i++){
      const isDataInArrayEqual = deepEqual(valueA[i], valueB[i]);
      if(!isDataInArrayEqual) return false;
    }
    return true;
  }
  
  // considering for objects;
  if(typeof valueA === 'object' !== typeof valueB === 'object'){
    return false;
  }
  if(typeof valueA === 'object'){
    let keysA = Object.keys(valueA);
    let keysB = Object.keys(valueB);
    
    if(keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
      if(keysA[i] !== keysB[i]) return false;
      const isValueInObjectEqual = deepEqual(valueA[keysA[i]], valueB[keysB[i]]);
      if(!isValueInObjectEqual) return false;
    }
  }
  return true;
}