
// https://www.greatfrontend.com/questions/javascript/jquery-css

/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
  const element = document.querySelector(selector);
  return {
    css : function(prop, value){
      // GETTER CASE
      if(value === undefined){
        if(element === null) return;

        const value = element.style[prop];
        return (value === '') ? undefined : value;
      }

      if(element !== null){
        element.style[prop] = value;
      }

      return this;
    }
  }
}