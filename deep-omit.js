// https://www.greatfrontend.com/questions/javascript/deep-omit

/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys) {
  if (Array.isArray(val)) {
    return val.map((item) => deepOmit(item, keys));
  }

  if (isPlainObject(val)) {
    const newObj = {};
    for (const key in val) {
      if (!keys.includes(key)) {
        newObj[key] = deepOmit(val[key], keys);
      }
    }
    return newObj;
  }
  return val;
}

const isPlainObject = (value) => {
  if (!value) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
};
