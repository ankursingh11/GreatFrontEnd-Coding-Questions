
// https://www.greatfrontend.com/questions/javascript/event-emitter

// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {
    constructor() {
      this._events = Object.create(null);
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
      if(!Object.hasOwn(this._events, eventName)){
        this._events[eventName] = [];
      }
      this._events[eventName].push(listener);
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
      if(!Object.hasOwn(this._events, eventName)){
        return this;
      }
      const listeners = this._events[eventName];
      const index = listeners.findIndex(listenerItem => listenerItem === listener);
      if(index < 0) return this;
      this._events[eventName].splice(index, 1);
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
      if(!Object.hasOwn(this._events, eventName) || this._events[eventName].length === 0){
        return false;
      }
      const listeners = this._events[eventName].slice();
      listeners.forEach(listenerItem => listenerItem.apply(null, args));
      return true;
  
    }
  }