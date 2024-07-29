
// https://www.greatfrontend.com/questions/javascript/promisify-ii

/**
 * @callback func
 * @returns Function
 */

const customSymbol = Symbol.for('util.promisify.custom');

export default function promisify(func) {
  if(func[customSymbol]) return func[customSymbol];

  return function(...args){
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, success) => {
        err ? reject(err) : resolve(success)
      })
    })
  }
}