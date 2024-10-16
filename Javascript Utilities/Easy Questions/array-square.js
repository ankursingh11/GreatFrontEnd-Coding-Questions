
// https://www.greatfrontend.com/questions/javascript/array-square

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  const square = [];
  for(let i = 0; i < this.length; i++){
    square.push(this[i]*this[i]);
  }
  return square;
};