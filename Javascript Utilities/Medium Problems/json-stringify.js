
// https://www.greatfrontend.com/questions/javascript/json-stringify

/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {

  if(Array.isArray(value)){
    const res = value.map(item => jsonStringify(item));
    return `[${res.join(',')}]`;
  }

  if(typeof value === 'object' && value !== null){
    const res = Object.entries(value).map(([key, value]) => `"${key}":${jsonStringify(value)}`);
    return `{${res.join(',')}}`;
  }
  
  if(typeof value === 'string'){
    return `"${value}"`;
  }

  return String(value);
}