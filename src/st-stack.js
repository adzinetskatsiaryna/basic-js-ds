const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
   constructor(){
     this.stack = []
   }
   //добавляет элемент в стек
  push( element ) {
   this.stack.push(element)
  }
//возвращает верхний элемент и удаляет его, возвращает 1
  pop() {
   if(this.stack.length){
    return this.stack.pop()
   }
  }
//возвращает верхний элемент, но не удаляет его, возвращает 1
  peek() {
    if(this.stack.length){
      return this.stack[this.stack.length-1]
    }
  }
}
