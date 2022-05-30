const { Queue } = require("../estructuras");
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlAcces = function (queue, event) {
  // Tu código aca:
  // crean instancia de Queue
  // los que cumplen los rquerimientos solo agregan (push) al array sus names
  // en caso que no cumplan los dequeue de la queue
  let arr = [];
  let numTicket = 0;
  let queueNumTicket = new Queue();
  let auxNum = 0;
  for (let i = 0; i < queue.size(); i++) {
    auxObj = queue.dequeue();
    queue.enqueue(auxObj);
    if (auxObj.age > 17 && auxObj.ticket.event === event) {
      numTicket = auxObj.ticket.number;
      let j = 0;
      while (j < queueNumTicket.size()) {
        j++;
        auxNum = queueNumTicket.dequeue();
        queueNumTicket.enqueue(auxNum);
        if (auxNum === numTicket) {
          break;
        }
      }
      if (queueNumTicket.size() === 0) {
        queueNumTicket.enqueue(numTicket);
        arr.push(auxObj.fullname);
      } else if (auxNum !== numTicket) {
        arr.push(auxObj.fullname);
      }
      while (j < queueNumTicket.size()) {
        j++;
        auxNum = queueNumTicket.dequeue();
        queueNumTicket.enqueue(auxNum);
      }
      queueNumTicket.enqueue(numTicket);
    }
  }
  return arr;
};

// Test Queue
const queue = new Queue();
queue.enqueue({
  fullname: "Mauro",
  age: 17,
  ticket: { number: 1, event: "Day" },
});

queue.enqueue(6);
queue.enqueue("Hola");
console.log(queue.size());
console.log(queue);
console.log(controlAcces(queue, "Tomorrowland"));
console.log(queue.array[0].fullname)
console.log(queue.array[0].ticket.event)

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

let array = [1, 2, 3, 1, 2, 3, 'santiago', { a: 1 }, { a: 1 }, 'santiago'];
let demo = new Set(array);
console.log(demo)

/* ---------------------------------------------------------------------------------------------------- */

// Cola de banco

// First in First Out

// Vemos lo ya implementado en el archivo estructuras.js
// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(el) {
//     this.queue.push(el);
//   }
//   dequeue() {
//     return this.queue.shift();
//   }
//   size() {
//     return this.queue.length;
//   }
// }

/*
  Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
  debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
  Ejemplo:
  - queueOne: [1,3,5]
  - queueTwo: [2,4,6]
  mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
  IMPORTANTE: Lo que recibe NO son arreglos sino que son Queues.
  */
var queueUno = new Queue();
var queueDos = new Queue();
queueUno.enqueue(1);
queueUno.enqueue(3);
queueUno.enqueue(5);
queueDos.enqueue(2);
queueDos.enqueue(4);
queueDos.enqueue(6);
console.log(queueUno);
console.log(queueDos);

let newQueue = new Queue();

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // [1, 3, 5]           [2, 4, 6]        ----> [3, 5]             [4, 6]
  if (queueTwo.size() > 0) {
    newQueue.enqueue(queueOne.dequeue());
    newQueue.enqueue(queueDos.dequeue());
    return mergeQueues(queueOne, queueTwo);
  } else {
   return newQueue
  }
};

var nose = mergeQueues(queueUno, queueDos)
console.log(nose)

/*
  // &&
v    v    v  --> 2do elemento
v    f    f
f    v    f
f    f    f
  // ||
v    v    v  --> 1er elemento
v    f    v
f    v    v
f    f    f
*/
/* -----------------------------------------------------------*/

//Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
//Ejemplo
// let array = [1, "a", 2, "b", [1, 2, 3]]
// filtraQueue(array)
// -> ["a", "b", [1, 2, 3]]

let array1 = [1, "a", 2, "b", [1, 2, 3], 'b', 4, 7, true, [1, 2, 3, 4, 5], 'hola'];

let queueFiltrada = new Queue()

function filtraQueue(arg) {
  if (arg.length > 0) {
    var aux = arg.shift();
    if (typeof aux !== 'number') {
      queueFiltrada.enqueue(aux);
      return filtraQueue(arg);
    } else {
      return filtraQueue(arg);
    }
  } else {
     return queueFiltrada;
  }
}

console.log(filtraQueue(array1))

module.exports = {
  controlAcces,
};
