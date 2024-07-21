
// https://www.greatfrontend.com/questions/javascript/queue

export default class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    this.queue.push(item);
    return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if(!this.isEmpty()){
      let ans = this.queue.splice(0, 1);
      return Number(ans);
    }
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    if(!this.isEmpty()){
      return this.queue[0];
    }
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    if(!this.isEmpty()){
      let ans = this.queue.pop();
      this.queue.push(ans);
      return ans;
    }
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.queue.length;
  }
}