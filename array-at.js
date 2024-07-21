
// https://www.greatfrontend.com/questions/javascript/array-at

/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  
  let len = this.length;
  if(index < 0) index = len + index;
  if(index >= len) return ;
  return this[index];
};