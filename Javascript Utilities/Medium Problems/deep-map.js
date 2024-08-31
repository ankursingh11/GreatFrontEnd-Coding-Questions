
// https://www.greatfrontend.com/questions/javascript/deep-map

/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
export default function deepMap(value, fn) {
  if(!value || typeof value !== 'object' || value instanceof RegExp){
    return fn.call(this, value);
  }
  if(Array.isArray(value)){
    const ans = [];
    for(let i = 0; i < value.length; i++){
      let res = deepMap(value[i], fn);
      ans.push(res);
    }
    return ans;
  }
  if(typeof value === 'object'){
    const ans = {};
    const keys = Object.keys(value);
    for(let i = 0; i < keys.length; i++){
      let res = deepMap(value[keys[i]], fn.bind(value));
      ans[keys[i]] = res;
    }
    return ans;
  }
}