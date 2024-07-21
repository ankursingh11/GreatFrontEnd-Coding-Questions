
// https://www.greatfrontend.com/questions/javascript/size

/**
 * Gets the size of `collection` by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 *
 * @param {Array | Object | Map | Set | string | null | undefined} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 */
export default function size(collection) {
  
  if(!collection) return 0;
  if(typeof collection === 'string' || Array.isArray(collection)) return collection.length;
  else if(collection instanceof Map || collection instanceof Set) return collection.size;
  else if(typeof collection === 'object') return Object.keys(collection).length;
}