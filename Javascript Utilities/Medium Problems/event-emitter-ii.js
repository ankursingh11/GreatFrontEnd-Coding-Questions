
// https://www.greatfrontend.com/questions/javascript/event-emitter-ii

// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.
export default class EventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._key = 0;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {{off: Function}}
   */
  on(eventName, listener) {
    if(!Object.hasOwn(this._events, eventName)){
      this._events[eventName] = [];
    }
    const listenerId = this._key;
    this._events[eventName][listenerId] = listener;
    this._key++;

    return {
      off : () => {
        delete this._events[eventName][listenerId];
      }
    }
  }

  /**
   * @param {string} eventName
   * @param {...any} args
   * @returns boolean
   */
  emit(eventName, ...args) {
    if(!Object.hasOwn(this._events, eventName) || 
    Object.keys(this._events[eventName]).length === 0){
      return false;
    }
    const listeners = {...this._events[eventName]};
    Object.values(listeners).forEach(listenerItem => {
      listenerItem.apply(null, args);
    })
    return true;
  }
}