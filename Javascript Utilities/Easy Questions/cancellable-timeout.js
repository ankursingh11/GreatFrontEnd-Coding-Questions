
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  let timeoutId = setTimeout(callback, delay, ...args);
  return function(){
    clearTimeout(timeoutId);
  }
}