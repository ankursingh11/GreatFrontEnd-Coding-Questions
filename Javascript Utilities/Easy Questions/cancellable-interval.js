


/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  let intervalId = setInterval(callback, delay, ...args);
  return function(){
    clearInterval(intervalId);
  }
}