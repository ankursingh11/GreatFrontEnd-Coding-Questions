
// https://www.greatfrontend.com/questions/javascript/get-elements-by-tag-name

/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(el, tagName) {
  const result = [];
  let tagNameParams = tagName.toUpperCase();

  function traverse(el){
    if(el === null || el === undefined){
      return
    }
    
    if(el.tagName === tagNameParams) result.push(el);

    for(const child of el.children){
      traverse(child);
    }
  }

  for(const child of el.children){
    traverse(child);
  }

  return result;
  
}