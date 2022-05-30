const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");

LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let arr = [];
  while (this.len > 0) {
    let current = this.head.next;
    let anterior = this.head;
    if (current !== null) {
      while (current.next !== null) {
        anterior = current;
        current = current.next;
      }
      anterior.next = null;
      arr.push(current.value);
    } else {
      arr.push(anterior.value);
      this.head = null;
    }
    this.len--;
  }
  arr = arr.sort();
  console.log(arr);
  while (arr.length > 0) {
    let anteriorAdd = this.head;
    var nodo = new Node(arr.pop());
    if (this.head === null) {
      this.head = nodo;
    } else {
      while (anteriorAdd.next !== null) {
        anteriorAdd = anteriorAdd.next;
      }
      anteriorAdd.next = nodo;
    }
    this.len++;
  }
};

var listaNueva = new LinkedList();
listaNueva.add(4);
listaNueva.add(7);
listaNueva.add(3);
listaNueva.add(1);
listaNueva.add(9);
listaNueva.add(2);
console.log(listaNueva);
console.log(listaNueva.orderList());
console.log(JSON.stringify(listaNueva));


if (typeof listaNueva === 'node') {
    console.log('hola')
}