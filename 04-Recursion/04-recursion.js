// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
var arreglo = [2, 3, 4];
const producto = function (array) {
  //escribe aqui tu codigo [7, 9, 3]
  let numero = 1;
  if (array.length === 0) {
    return numero;
  } else {
    return array.pop() * producto(array) * numero;
  }
};
console.log(producto(arreglo));

// Recursividad en javascript con objetos
// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//    prop2:{value:5}
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
let obj = {
  school: {
    hogwarts: {
      headmaster: {
        name: {
          first: "Albus",
          last: "Dumbledore",
        },
      },
    },
  },
  prop1: 5,
  prop2: 6,
};
const isThere = function (obj, value) {
  /*
  // tu código aca
  for (const key in obj) {
    if (obj[key] === value) {
      return true;
    } else if (typeof obj[key] === "object") {
      if (isThere(obj[key], value)) {
        return true;
      }
    }
  }
  return false; */
    // tu código aca
    for (let key in obj) {
      if (obj[key] === value) {
        return true;
      }
    }
    for (let key in obj) {
      if (obj[key] instanceof Object) { 
        return isThere(obj[key], value);
      }
    }
    return false;
};
console.log(isThere(obj, 'Albus'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo
// parImpar(20)
// "Par"

let parImpar = (num) => {
  if (num >= 0) {
    if (num === 0) {
      return "Par";
    } else if (num === 1) {
      return "Impar";
    } else {
      return parImpar(num - 2);
    }
  } else {
    return "El numero no puede ser negativos";
  }
};
console.log(parImpar(15));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 2
// Objetivo: Realizar un contador decreciente hasta llegar a 1, que arranque del numero que se le pasa por parametro
// Desafio: Devolver los numeros en un array

// Ejemplo
// restar(8)
// (8)  [8, 7, 6, 5, 4, 3, 2, 1]

let nuevoArray = [];

function restar(n) {
  nuevoArray.push(n);
  if (n === 1) {
    return nuevoArray;
  } else {
    return restar(n - 1);
  }
}
console.log(restar(10));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 3

//Objetivo: Realizar una funcion que invierta el orden del string recibido
// Ejemplo: reverse("hola susuna")
// --> 'anusus aloh'

function reverse(str) {
  // return str.split("").reverse().join("");
  if (str.length === 0) return false;
  if (str.length === 1) return str;
  if (str.length > 1) {
    let array = str.split("");
    return array.pop() + reverse(array.join(""));
  }
}

console.log(reverse("hola como estas ?"));
// "hola"
//  0123
//   1----
//   "ola" + "h"------->
/*                   "ola"
                      012
                       "la"  + "o"  ----------->
                                                "la"
                                                  "a" + "l"
                                                  --------"a"
                                                  "a+ l + o + h"*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ultimo ejercicio

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
var array1 = [1, [2, [3, 4]], [5, 6], 7];

var countArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum = sum + countArray(array[i]);
    } else {
      sum = sum + array[i];
    }
  }
  return sum;

};

console.log(countArray(array1));

module.exports = { producto, isThere };
