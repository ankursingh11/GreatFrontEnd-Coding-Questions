
// https://www.greatfrontend.com/questions/javascript/number-of-arguments

/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments(...args) {
  return args.length;
}