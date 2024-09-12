
// https://www.greatfrontend.com/questions/javascript/promise-any

/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if(iterable.length === 0){
      reject(new AggregateError([]));
    }

    const errors = new Array(iterable.length);
    const pending = iterable.length;
    iterable.forEach(async (item, index) => {
      try{
        const value = await item;
        resolve(value);
      }catch(err){
        errors[index] = err;
        pending--;
        if(pending === 0){
          reject(new AggregateError(errors));
        }
      }
    })
  })
}