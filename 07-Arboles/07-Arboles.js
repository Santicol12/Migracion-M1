const { BinarySearchTree } = require("../estructuras");

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)
//             /     \
//          (7)     (12)
//         /  \      /  \
//      (2)  (9)  (11)  (15)
BinarySearchTree.prototype.search = function (value) {
  // Tu código aca:
  
};
const miArbolito = new BinarySearchTree(11);
miArbolito.insert(10);
miArbolito.insert(7);
miArbolito.insert(12);
miArbolito.insert(2);
miArbolito.insert(9);
miArbolito.insert(15);
miArbolito.insert(21);
console.log(miArbolito);
console.log(JSON.stringify(miArbolito));
console.log("search is: ", miArbolito.search(43));

// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2

// recorrer arbol PreOrder DLR o VLR  value left rigth
// ["10", 7, 2, 9, 12, 11, 15]
// recorrer arbol InOrder LDR o LVR  left value rigth
// [2, 7, 9, "10", 11, 12, 15]
// recorrer arbol PosOrder LRD o LRD  left rigth value
// [2, 9, 7, 11, 15, 12, "10"]
BinarySearchTree.prototype.height = function () {
  // tu código aca:
  
};



module.exports = {
  BinarySearchTree,
};
