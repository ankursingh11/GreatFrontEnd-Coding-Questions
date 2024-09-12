
// https://www.greatfrontend.com/questions/javascript/conforms-to

/**
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns true if object conforms, else false.
 */
export default function conformsTo(object, source){

  if(Object.keys(object).length === 0) return false;

  for(const key in source){
    if(Object.hasOwn(source, key)){
      if(!(key in object) || !source[key](object[key])) return false;
    }
  }
  return true;
}
