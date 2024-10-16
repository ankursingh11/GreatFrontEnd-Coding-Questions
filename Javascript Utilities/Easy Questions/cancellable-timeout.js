
// https://www.greatfrontend.com/questions/javascript/cancellable-timeout

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  let timerId = setTimeout(callback, delay, ...args);
  return function () {
    clearTimeout(timerId);
  };
}
