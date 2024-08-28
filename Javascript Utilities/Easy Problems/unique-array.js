
// https://www.greatfrontend.com/questions/javascript/unique-array

/**
 * @param {Array} array
 * @return {Array}
 */
export default function uniqueArray(array) {
  return Array.from(new Set(array));
}