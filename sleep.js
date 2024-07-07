
/**
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
  const pr = new Promise(function(resolve, reject){
    setTimeout(()=>{resolve()}, duration);
  })

  return pr;
}