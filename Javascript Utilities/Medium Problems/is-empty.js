
// https://www.greatfrontend.com/questions/javascript/is-empty

/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
export default function isEmpty(value) {
  const valueType = typeof value;
  if(!valueType || valueType === 'boolean' || valueType === 'number' || valueType === 'symbol') return true;
  if(valueType === 'string') return value.length === 0;
  if(Array.isArray(value)) return value.length === 0;
  if(value instanceof Map || value instanceof Set) return value.size === 0;
  if(valueType === 'object') return Object.keys(value).length === 0;
}