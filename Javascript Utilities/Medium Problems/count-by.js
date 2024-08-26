
// https://www.greatfrontend.com/questions/javascript/count-by

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const ans = {};
  for(let ele of array){
    let key = iteratee(ele);
    
    if(ans[key]) ans[key]+=1;
    else ans[key] = 1;
  }
  return ans;
}