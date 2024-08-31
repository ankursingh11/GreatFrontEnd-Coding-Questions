
// https://www.greatfrontend.com/questions/javascript/resumable-interval

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let intervalId = null;
  let stopped = false;
  
  function start(){
    if(stopped || intervalId !== null) return;
    callback(...args);
    intervalId = setInterval(callback, delay, ...args);
  }
  
  function clear(){
    clearInterval(intervalId);
    intervalId = null;
  }
  
  function pause(){
    if(stopped) return;
    clear();
  }
  
  function stop(){
    stopped = true;
    clear();
  }
  
  return {
    start, pause, stop
  }
}
