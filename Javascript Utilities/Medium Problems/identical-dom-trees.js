
// https://www.greatfrontend.com/questions/javascript/identical-dom-trees

/**
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {boolean}
 */
export default function identicalDOMTrees(nodeA, nodeB) {
  if(nodeA.nodeType !== nodeB.nodeType){
    return false;
  }

  if(nodeA.nodeType === Node.TEXT_NODE){
    return nodeA.textContent === nodeB.textContent;
  }

  if(nodeA.tagName !== nodeB.tagName){
    return false;
  }

  if(nodeA.childNodes.length !== nodeB.childNodes.length){
    return false;
  }

  if(nodeA.attributes.length !== nodeB.attributes.length){
    return false;
  }

  const hasSameAttribute = nodeA
      .getAttributeNames()
      .every((attrName) => nodeA.getAttribute(attrName) === nodeB.getAttribute(attrName));

  if(!hasSameAttribute) return false;

  return Array.prototype.every.call(nodeA.childNodes, (childA, index) => 
  identicalDOMTrees(childA, nodeB.childNodes[index]));
}