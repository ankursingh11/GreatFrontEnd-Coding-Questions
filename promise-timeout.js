
// https://www.greatfrontend.com/questions/javascript/promise-timeout

/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */
export default function promiseTimeout(promise, duration) {
  return new Promise((resolve, reject) =>{
    const timeout = new Promise((_, reject) => {
      setTimeout(() =>{
        reject("Promise timeout");
      }, duration);
    })

    Promise.race([promise, timeout])
    .then(resolve)
    .catch(reject);
  })
}