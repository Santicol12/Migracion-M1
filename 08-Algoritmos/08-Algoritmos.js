"use strict";
const array = [3, 4, 1, 9, 2, 5, 7, 8, 6];
//             a  b  c  d
//             0  1  2  3
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = array.length; 0 < i; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}

// console.log(bubbleSort(array))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i; 0 < j; j--) {
      if (array[j - 1] > array[j]) {
        var aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}

//console.log(insertionSort(array))

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
  for (let i = 0; i < array.length; i++) {
    var min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    var aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}
// console.log(selectionSort(array))

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array;
  }
  let pivote = array[0];
  let izq = [];
  let der = [];
  let ordenados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
      izq.push(array[i]);
    } else if (array[i] > pivote) {
      der.push(array[i]);
    } else if (pivote === array[i]) {
      ordenados.push(array[i]);
    }
  }
  return quickSort(izq).concat(ordenados).concat(quickSort(der));
}

console.log(quickSort(array))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}

function merge(left, right) {}

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
