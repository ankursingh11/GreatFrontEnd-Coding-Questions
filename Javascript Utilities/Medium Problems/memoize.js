
// https://www.greatfrontend.com/questions/javascript/memoize

/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {
  const cache = new Map();
  return function(args){
    // console.log();
    // console.log("print", cache);
    // console.log("cache has args ",args, cache.has(args));
    
    if(cache.has(args)) return cache.get(args);
    let result = func.call(this, args);
    cache.set(args, result);
    return result;
  }
}
