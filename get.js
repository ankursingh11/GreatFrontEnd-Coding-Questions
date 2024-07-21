
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

  while(obj != null && i < len){
    obj = obj[path[i++]];
  }

  const value = (i && i === len) ? obj : undefined;
  return value !== undefined ? value : defaultValue;
}