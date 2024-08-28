
// https://www.greatfrontend.com/questions/javascript/type-utilities-ii

export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  return (value !== null && (typeof value === 'object' || isFunction(value)));
}

export function isPlainObject(value) {
  if(!value) return false;
  let proto = Object.getPrototypeOf(value);
  return (proto === null || proto === Object.prototype);
}