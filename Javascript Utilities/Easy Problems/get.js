
// https://www.greatfrontend.com/questions/javascript/get

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let i = 0;
  let len = path.length;
  let obj = objectParam;
  while(obj && i < len){
    obj = obj[path[i++]]
  }
  let value = (i === len) ? obj : undefined;
  return (value === undefined) ? defaultValue : value;
  
}