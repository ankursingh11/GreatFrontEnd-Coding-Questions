
// https://www.greatfrontend.com/questions/javascript/map-async

/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    const result = new Array(iterable.length);
    let unresolved = iterable.length;

    if(unresolved === 0){
      resolve(result);
      return;
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then(value => {
          result[index] = value;
          unresolved-=1;

          if(unresolved === 0){
            resolve(result);
            return;
          }
        })
        .catch(err => reject(err));
    })
  })
}