
// https://www.greatfrontend.com/questions/javascript/array-square

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  
  let result = [];
  for(let i = 0; i < this.length; i++){
    result.push(this[i]*this[i]);
  }

  return result;
};