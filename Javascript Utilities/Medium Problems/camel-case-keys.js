// https://www.greatfrontend.com/questions/javascript/camel-case-keys

/**
 * @param Object
 * @return Object
 */

function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

export default function camelCaseKeys(object) {
  if (Array.isArray(object)) {
    return object.map((ele) => camelCaseKeys(ele));
  }

  if (typeof object !== "object" || object === null) return object;

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      camelCase(key),
      camelCaseKeys(value),
    ])
  );
}
