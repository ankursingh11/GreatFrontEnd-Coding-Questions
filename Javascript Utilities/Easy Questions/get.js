
// https://www.greatfrontend.com/questions/javascript/get

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  pathParam = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let len = pathParam.length;
  let i = 0;
  let obj = objectParam;
  while(obj && i < len){
    obj = obj[pathParam[i++]];
  }
  // console.log(obj);
  let value = (i === len) ? obj : undefined;
  return (value === undefined) ? defaultValue : value;
}
