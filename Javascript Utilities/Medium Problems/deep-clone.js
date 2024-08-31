
// https://www.greatfrontend.com/questions/javascript/deep-clone

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value){
  if(!value || typeof value !== 'object'){
    return value;
  }
  
  if(Array.isArray(value)){
    const ans = [];
    for(let i = 0; i < value.length; i++){
      let res = deepClone(value[i]);
      ans.push(res);
    }
    return ans;
  }
  
  
  if(typeof value === 'object'){
    let keys = Object.keys(value);
    const ans = {};
    for(let i = 0; i < keys.length; i++){
      let res = deepClone(value[keys[i]]);
      ans[keys[i]] = res;
    }
    return ans;
  }
}
