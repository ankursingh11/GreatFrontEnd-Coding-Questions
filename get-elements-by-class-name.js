// https://www.greatfrontend.com/questions/javascript/get-elements-by-class-name

/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */

function isSubset(a, b) {
  return Array.from(a).every((value) => b.contains(value));
}

export default function getElementsByClassName(element, classNames) {
  const elements = [];
  const classNamesSet = new Set(classNames.trim().split(/\s+/));

  function traverse(el) {
    if (!el) return;

    if (isSubset(classNamesSet, el.classList)) {
      elements.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }

  return elements;
}
