
// https://www.greatfrontend.com/questions/javascript/flatten

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value){
  const result = [];
  for(let i = 0; i < value.length; i++){
    if(Array.isArray(value[i])){
      const res = flatten(value[i]);
      result.push(...res);
    }else result.push(value[i]);
  }
  return result;
}

