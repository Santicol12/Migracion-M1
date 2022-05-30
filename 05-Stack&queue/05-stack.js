const { Stack, Queue } = require("../estructuras");

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas.

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado oro : raM odaluzA oro
function efectoEspejo(str) {
  // Colombia Argentina
  //tu codigo aqui
  let stringInv = ''
  let auxString = "";
  let auxStack = new Stack();
  for (let i = str.length -1; -2 < i; i--) {
    if (str[i] === " " || i === -1) {
      auxStack.colocar(auxString);
      auxString = ''
    } else {
      auxString += str[i];
    }
  }
  while (0 < auxStack.size()) {
    stringInv = stringInv + ' ' + auxStack.quitar()
  }
  return stringInv.trim()
}

console.log(efectoEspejo('COLOMBIA ES EL MEJOR PAIS DEL MUNDO'))


const stackito = new Stack();
stackito.colocar({ name: "Jaja" });
stackito.colocar(3);
console.log(stackito);

// [{{{{{{{{{{}}}}}}}}}}]
// [{}{}{}{}{}]
// [[{}{}{}]]
// {[{{{{{{}}}}}}]}
// [{{{}{}{}{}{}}}]

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------------------------------------------*/
// Last in First Out
// Vemos lo ya implementado en el archivo estructuras.js
// function Stack() {
//   this.stack = [];
// }

// Stack.prototype.push = function (el) {
//   this.stack.push(el);
// };

// Stack.prototype.pop = function () {
//   return this.stack.pop();
// };

// Stack.prototype.size = function () {
//   return this.stack.length;
// };

/* ************************************************************************************************* */
/*
  Desarrolla una funcion que al recibir un string, evalue si la cantidad de parentesis estan balanceados
  Debes usar metodos de STACK

  ej. parentesisBalanceaDOS("(hola (que (tal)))") --> Todo esta ok
  ej. parentesisBalanceaDOS("(hola (que (tal)") --> Hay uno o mas paréntesis desbalanceados
  */

function parentesisBalanceaDOS(str) {
  let left = 0
  let right = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      left++
    } else if (str[i] === ')') {
      right++
    }
  }
  if (right === left) {
    return 'Todo esta ok'
  } else {
    return "Hay uno o mas paréntesis desbalanceados";
  }
}

console.log(parentesisBalanceaDOS("(hola (que (tal)"));

module.exports = {
  efectoEspejo,
};
