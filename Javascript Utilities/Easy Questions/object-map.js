
// https://www.greatfrontend.com/questions/javascript/object-map

/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
export default function objectMap(obj, fn) {
  
  return Object.fromEntries(
    Object.keys(obj).map(ele => [ele, fn.call(obj, obj[ele])])
  );
}