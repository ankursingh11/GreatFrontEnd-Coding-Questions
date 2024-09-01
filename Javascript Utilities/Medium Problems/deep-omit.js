
// https://www.greatfrontend.com/questions/javascript/deep-omit
/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
const isPlainObject = (value) => {
  if(!value) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

export default function deepOmit(value, keys){

  if(Array.isArray(value)){
    return value.map(v => deepOmit(v, keys));
  }
  
  if(isPlainObject(value)){
    const result = {};
    for(const key in value){
      if(!keys.includes(key)){
        result[key] = deepOmit(value[key], keys);
      }
    }
    return result;
  }
  return value;
}
