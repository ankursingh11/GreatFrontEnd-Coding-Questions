
/**
 * @param {*} reason
 * @returns Promise
 */
export default function promiseReject(reason) {
  const pr = new Promise(function(resolve, reject){
    reject(reason);
  })

  return pr;
}