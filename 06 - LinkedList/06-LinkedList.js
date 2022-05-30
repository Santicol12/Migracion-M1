const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");
// LinkedList es como las mamushkas de la lista
// agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  // Tu código acá
  return this.len;
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let arr = [];
  while (this.len > 1) {
    arr.push(this.remove());
  }
  arr.push(this.remove());
  this.len--;
  arr = arr.sort();
  while (arr.length > 0) {
    this.add(arr.pop());
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

// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) { // (valor, numberNodo)
  var anterior = this.head
  var current = this.head.next
  var nodo = new Node(data)
  if (this.head === null)
    return null
  if (pos <= this.len) {
    if (this.head.numberNodo !== pos) {
      while (current.next !== null) {
        if (pos === current.numberNodo) {
          var aux = current
          anterior.next = nodo
          nodo.numberNodo = aux.numberNodo
          nodo.next = aux
          break
        }
        anterior = current
        current = current.next
      }
    } else {
      var aux = this.head
      this.head = nodo
      nodo.numberNodo = aux.numberNodo;
      nodo.next = aux;
    }
    var despues = nodo.next
    while (despues !== null) {
      despues.numberNodo += 1
      despues = despues.next;
    }
    this.len++;
  } else {
    this.add(data)
    return 'Se añadió en la ultima posición'
  }
};

const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(22);
miListitaEnlazada.add(66);
console.log(miListitaEnlazada.insert(111, 1))
console.log(miListitaEnlazada);
console.log(JSON.stringify(miListitaEnlazada));

console.log(JSON.stringify(miListitaEnlazada.insert(777, 7)));
console.log(JSON.stringify(miListitaEnlazada.insert(896, 10)));
console.log(miListitaEnlazada);
console.log(JSON.stringify(miListitaEnlazada));
console.log(miListitaEnlazada.search(33))


// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Vemos lo ya implementado en el archivo estructuras.js
// function LinkedList() {
//   this.head = null
// }

// function Node(value){
// this.value = value;
// this.next = null
// }

/* ////////////////////////----- ----- --------/////////////////// */

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1
let cambios = 0;
LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  let current = this.head 
  let cambios = 0
  let changeNumber = 0
  while (current !== null) {
    changeNumber = +current.value;
    if (Number.isNaN(changeNumber)) {
      current.value = "NotNumber";
      cambios++;
    }
      current = current.next;
  }
  return cambios
};

const listaNueva1 = new LinkedList();
listaNueva1.add('hola');
listaNueva1.add('22');
listaNueva1.add(77);
listaNueva1.add(true);
listaNueva1.add('adios');
listaNueva1.add("3647338");
listaNueva1.add(false);
listaNueva1.add("22xd");
console.log(listaNueva1)
console.log(listaNueva1.changeNotNumbers())
console.log(JSON.stringify(listaNueva1))

module.exports = {
  LinkedList,
};
