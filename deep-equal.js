
// https://www.greatfrontend.com/questions/javascript/deep-equal

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if(!valueA || typeof valueA !== 'object'){
    return valueA === valueB;
  }
  if(typeof valueA !== typeof valueB) return false;
  if(Array.isArray(valueA) !== Array.isArray(valueB)) return false;
  if(Array.isArray(valueA)){
    if(valueA.length !== valueB.length) return false;
    for(let i = 0; i < valueA.length; i++){
      if(!deepEqual(valueA[i], valueB[i])) return false;
    }
  }else{
    let keysA = Object.keys(valueA);
    let keysB = Object.keys(valueB);

    if(keysA.length !== keysB.length) return false;

    for(const key of keysA){
      if(!deepEqual(valueA[key], valueB[key])) return false;
    }
  }
  return true;
}