
// https://www.greatfrontend.com/questions/javascript/promisify

/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
  return function(...args){
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, success) => {
        err ? reject(err) : resolve(success);
      })
    })
  }
}