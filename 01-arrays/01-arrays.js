function invertirOrden(array) {
  // [1,2,"x"]
  // ["x",2,1]
  // Invertir el orden de los elementos del array que recibe por parametro
  // Que los ultimos elementos, pasen a ser los primeros
  // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO
  // debera ser devuelto
  // No vale usar el metodo "reverse"
  // [1, 4, 24, 10, 8, 6]
  var arregloNuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] > -1 && array[i] < 10) {
      arregloNuevo.unshift(array[i]);
    }
  }
  return arregloNuevo;
}

function numeroEnComun(array1, array2) {
  // Entre los dos array's que recibe la funcion por parametro
  // Buscar y retornar el valor en comun entre ellos
  var i = 0;
  var j = 0;
  var numeroIgual = null;
  var numMin = array1[0];
  while (j < array2.length) {
    if (numMin > array1[i]) {
      numMin = array1[i];
    }
    if (numMin > array2[j]) {
      numMin = array2[j];
    }
    if (array1[i] === array2[j]) {
      numeroIgual = array1[i];
      return numeroIgual
    }
    if (array1.length > i) {
      i++;
    } else {
      j++;
      i = 0;
    }
  }
    return numMin;
}

var arreglo1 = [23, 75, 22];
var arreglo2 = [33, 54, 11];
console.log(numeroEnComun(arreglo1, arreglo2));

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      var j = 0;
      var suma = 0;
      while (j < array[i].length) {
        suma += array[i][j];
        j++;
      }
      array[i] = suma;
    }
  }
  return array;
}


function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
  // vemos que todos los elementos deben tener el mismo valor
  // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
  // es decir Si el resultado de la division no es un entero, deben devolver false
  if (numero / divisor !== Math.floor(numero / divisor)) {
    return false;
  }
  var resultado = numero / divisor;
  var numeroDivibido = [];
  for (let i = 0; i < divisor; i++) {
    numeroDivibido.push(resultado);
  }
  return numeroDivibido;
}

function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Tenes que retornar un array
  // Solamente con el elemento menor y mayor del array recibido
  /*
  var min = array[0];
  var max = array[0];
  var arreglo = [];
  var i = 1;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    i++;
  }
  arreglo.push(min);
  arreglo.push(max);
  return arreglo;
  */
  var maxMin = []
  maxMin.push(Math.min.apply(null, array))
  maxMin.push(Math.max.apply(null, array));
  return maxMin
}

/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};
