
// https://www.greatfrontend.com/questions/javascript/compact-ii

/**
 * @param {Array|Object} value
 * @return {Array|Object}
 */
export default function compact(value){
  
  if(typeof value !== 'object' || value === null) return value;
  
  if(Array.isArray(value)){
    return value.filter(ele => ele).map(ele => compact(ele));
  }
  
  return Object.fromEntries(
    Object.entries(value)
    .filter(([key, value]) => value)
    .map(([key, value]) => [key, compact(value)])
  )
}