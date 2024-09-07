
// https://www.greatfrontend.com/questions/javascript/promise-merge

/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
function isPlainObject(obj){
  if(!obj) return false;
  const proto = Object.getPrototypeOf(obj);
  return proto === null || proto === Object.prototype;
}

export default function promiseMerge(p1, p2){
  return Promise.all([p1, p2]).then(([result1, result2]) => {
    try {
      
      // number
      if(typeof result1 === 'number' && typeof result2 === 'number'){
        return result1+result2;
      }
      // string
      else if(typeof result1 === 'string' && typeof result2 === 'string'){
        return result1+result2
      }
      // arrays
      else if(Array.isArray(result1) && Array.isArray(result2)){
        return [...result1, ...result2]
      }
      // plain object
      else if(isPlainObject(result1) && isPlainObject(result2)){
        return {...result1, ...result2}
      }
      else {
        throw 'Unsupported data types';
      }
    }catch{
      throw 'Unsupported data types';
    }
  })
}
