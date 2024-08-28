
// https://www.greatfrontend.com/questions/javascript/promise-race

/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach(item => Promise.resolve(item).then(resolve, reject));
  })
}