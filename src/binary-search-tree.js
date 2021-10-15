const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(){
    this.rootNode === null; //сoздаем дерево, объявляем его корень
  }

  //возвращает корневой узел дерева
  root() {
    if(this.rootNode){
      return this.rootNode
    } return null
   
  }

  //добавляет узел с data к дереву
  add( data ) {
    this.rootNode = addData(this.rootNode, data); //положив корень то что вернет функция
    function addData(node, data){
      if(!node){ //если узла нет, то добавляем новый узел
        return new Node(data)
      }
      if(node.data === data){ //если узел существует и его значение совпадает с новым значением, ничего не добавляем 
        return node
      }
      if(data < node.data){ // если знчение, которое хотим добавить меньше значения в текущем узле, то в этом узле левый потомок будет иметь значение, которое вернет addData
        node.left = addData(node.left, data)
      }else{
        node.right = addData(node.right, data)
      }
      return node
    }

  }

  //возвращает true, если узел с data имеется в дереве и false, если нет
  has(data ) {
    return !this.find(data) ? false : true;
  }
  //возвращает узел с data, если узел с data имеется в дереве и null, если нет
  find( data) {
   return searchNoda(this.rootNode, data)
   function searchNoda(node, data){
     if(!node){
       return null;
     };
     if(node.data===data){
       return node
     }
     return data < node.data ?
      searchNoda(node.left, data):
      searchNoda(node.right, data)
   }
  }
  // удаляет узел с data из дерева, если узел с data имеется в дереве
  remove( data ) {
    this.rootNode = remoweNode(this.rootNode, data); // удали узел в поддереве таком-то и с таким значением
   function remoweNode(node, data){
      if(!node){
        return null
      }
      if(data < node.data){ // если искомое значение меньше чем значение в текущем узле 
        node.left = remoweNode(node.left, data); // идем к левому узлу и удаляем из левого поддерева нужное значение(data), и кладем в левое поддерево результат без удаленного нода
        return node // вернем текущий узел, чтобы положить в корень дерево
      } else if(node.data < data){ //если значение больше чем в текущем узле
        node.right = remoweNode(node.right, data);//щбновили поддерево
        return node; // вернули его
      }else{
        // если текущий узел является листом у него нет ни правого ни левого поддерва, те последний элемент, нет потомков 
        if(!node.left && !node.right){ // нет левого и нет правого потомка
          return null // удалили его и вернули null
        }
        if(!node.left){ //если нет левого потомка
          node = node.right; // нашли элемент который хотели удалить и увидели у него правое поддерево, тогда вместо него кладем все правое поодерево и вернули обнавленный элемент
          return node;
        }
        if(!node.right){ // усли нет правого потомка
          node = node.left;
          return node;
        }
        // есть оба поддерево  и правое  и левое (справа все элементы больше чем текущий)
        let minRight = node.right; //ищем минимум среди правого поддерева, начинаем с корня правого поддерева
        while(minRight.left){ // ищем элемент меньше чем искомое, меньше чем следующий узел, если ничего дальше нет достигли минимума
          minRight = minRight.left 
        }
        node.data = minRight.data; // как только нашли минимальный элемент в правом поддереве, его значение помещаем в значение удаляемого узла
        node.right = remoweNode(node.right, minRight.data); // удаляем узел с минимальным значением из правого поддерава
        return node; // возвращаем текущий узел
      }
    }
  }
  // возвращает минимальное  значение, хранящееся в дереве (или `null`, если у дерева нет узлов)
  min() { //минимальный элемент находится левее корня дерева
    if(!this.rootNode){
      return null
    }
    let node = this.rootNode // переменная для обхода, будет ходить и искать минимальное значение, начинаем с корня
    while(node.left){ // если есть кто-то меньше , мы к нему переходим
      node = node.left // когда дошли до самого маленького
    }
    return node.data // взвращаем значение самого маленького элемента
  }
  //возвращает максимальное  значение, хранящееся в дереве (или `null`, если у дерева нет узлов)
  max() {
    if(!this.rootNode){
      return null
    }
    let node = this.rootNode
    while(node.right){
      node = node.right
    }
    return node.data
  }

}