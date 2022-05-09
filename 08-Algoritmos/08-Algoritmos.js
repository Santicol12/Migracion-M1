"use strict";
const array = [3, 4, 1, 9, 2, 5, 7, 8, 6];
//             a  b  c  d
//             0  1  2  3
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}
// bubbleSort(array);

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
}
// insertionSort(array);

// optimo en menor cantidad de espacio (menos variables)
// ya que su var se encuentra fuera del for
// mas exacto en su recorrido igual al gráfico de ejemplo
// y menos pasos que el código viejo de insertionSort
// ejemplo: en let array = [3,6,5,9,1,2] tiene 99 pasos
// y el viejo insertionSort tiene 103 pasos

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
}
// selectionSort(array);

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}
// quickSort(array);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
}

function merge(left, right) {
 
}

//console.log("merge sort is: ",mergeSort(array));

// No modificar nada debajo de esta línea
// --------------------------------


module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};
