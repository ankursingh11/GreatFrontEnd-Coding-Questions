
// https://www.greatfrontend.com/questions/javascript/classnames

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let ans = "";
  for(let ele of args){
    if(typeof ele === 'string' || (ele && typeof ele === 'number')) ans += ele + " ";
    
    else if(Array.isArray(ele)){
      ans += classNames(...ele);
    }
    
    else if(typeof ele === 'object'){
      for(const key in ele){
        if(ele[key]) ans += key + " ";
      }
    }
  }
  return ans.trim();
}