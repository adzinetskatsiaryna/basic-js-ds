const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    this.head = null; // первого элемента пока нет
    this.length = 0;
  }


  getUnderlyingList() {
    return this.head;
  }
//помещаем значение в конец очереди
  enqueue(value) {
   if(this.length === 0){
     this.head = new ListNode(value); // если список пуст, создаем новый листнод и присваиваем его значение первому элементу
   }else{
     let current = this.head; // если элементы были, то мы получаем ссылку на текущий элемент(начало списка)
     while (current.next) { //двигаемся к последнему узлу, у текущего расматривоемого (есть поле next  и оно не равно null)
       current = current.next //постоянно меняем ссылку на текущий элемент, двигаясь к последнему элементу. как только у него next=null, мы добавляем в конец новый нод
     }
     current.next = new ListNode(value)
   }
   this.length ++ // увеличиваем длину
  }
//удадяем значение из начала очереди
  dequeue() {
    const current = this.head; //находим текущую позицию head
    this.head = this.head.next; //теперь head равен следующему элементу за ним
    this.length--; //уменьшаем длину

    return current.value; //возвращаем значение удаленного head записанного в current
  }
}