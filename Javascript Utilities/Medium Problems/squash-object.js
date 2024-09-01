
// https://www.greatfrontend.com/questions/javascript/squash-object

/**
 * @param {Object} obj
 * @return {Object}
 */
function chunk(arr, size = 2){
  const result = [];
  while(arr.length){
    result.push(arr.splice(0, size));
  }
  return result;
}

function traverse(object, path = []){
  if(typeof object !== 'object' || object === null){
    return [path.join('.'), object];
  }
  
  return Object.entries(object).flatMap(([key, value]) => {
    const newPath = (key === '') ? [...path] : [...path, key];
    return traverse(value, newPath);
  })
}

export default function squashObject(object) {
  const flattened = traverse(object);
  return Object.fromEntries(chunk(flattened));
}