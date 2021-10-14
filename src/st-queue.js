const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }
  enqueue(value) {
    const node = new ListNode(value);

    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    }
      this.last.next = node;
      this.last = node;
  }

  dequeue() {
    const temp = this.first;
    this.first = this.first ? this.first.next : null;
    return temp.value;
  }
}