
// https://www.greatfrontend.com/questions/javascript/memoize-ii

/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {
  const cache = new Map();
  return function(...args){
    const key = JSON.stringify(args);
    if(cache.has(key)) return cache.get(key);
    
    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  }
}
