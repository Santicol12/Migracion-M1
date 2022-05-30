function timeConversion(time) {
  // Recibe una hora en formato 12 horas y retorna la hora en formato 24 horas
  // Ejemplo:
  // timeConversion("12:00 AM") // "00:00"
  // timeConversion("12:00 PM") // "12:00"
  // timeConversion("27:00") // false
  // timeConversion("12:60") // false
  // timeConversion("09:00 PM") // "21:00"
  // tu codigo acá
  if (
    time.length === 10 &&
    time.substring(0, 2) < 13 &&
    time.substring(3, 5) < 60 &&
    time.substring(6, 8) < 60
  ) {
    if (time.substring(8, 10) === "PM" && time.substring(0, 2) < 12) {
      return +time.substring(0, 2) + 12 + time.substring(2, 8);
    } else if (
      time.substring(8, 10) === "AM" &&
      time.substring(0, 2) === "12"
    ) {
      return "00" + time.substring(2, 8);
    } else {
      return time.substring(0, 8);
    }
  } else {
    return false;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.

/*
Crear una funcion saludar que pueda fijar cada vez que la guardo en una variable distintos saludos.
Recibira en la funcion interna el nombre a quien tiene que saludar y retornara el saludo correspondiente seguido por el nombre al ser invocada
*/
function saludar(saludo) {
  return function saludoEspecial(nombre) {
    return saludo + " " + nombre;
  };
}

var saludoEspañol = saludar("hola");
console.log(saludoEspañol("Santiago"));
var saludoIngles = saludar("Hello");
console.log(saludoIngles("Santiago"));

/*---------------------------------------------------*/

/* 
Crear una funcion contador que debe incrementar de a uno cada vez que invoco la funcion.
Adicionalmente agregarle una funcion que cuando pasen 8 seg incremente el contador a 100.

*/
function contador() {
  var i = 0;
  return function suma() {
    setTimeout(function () {
       i += 100
    }, 8000);
    i += 1
    return i
  }
}

/*---------------------------------------------------*/
/*
  Retorna una funcion que cuando sea invocada retorne 
un valor creciente.
 el primer valor debe ser el que se le pase por 
parametro a la funcion global.
 
 ejemplo: const Pepe = creciendo(20);
 Pepe(); // "El proximo año va a tener 21"
 Pepe(); // "El proximo año va a tener 22"
*/
function creciendo(n) {
  var i = n
  return function () {
    i++
    return i 
  }
}

var pepe = creciendo(70)
console.log(pepe())
/*---------------------------------------------------*/
// Retorna una funcion que cuando sea invocada con un valor mayor a 50 retorne un valor decreciente,
// pero si el valor es menor o igual que 50 retorne un valor creciente
// el primer valor debe ser el que se le pase por parametro a la funcion global.
// ejemplo: const newCounter = arribaArbajo(49);
// newCounter(); // 50
// newCounter(); // 51
// newCounter(); // 52
// newCounter(); // 53
// ejemplo: const newCounter = arribaArbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49

function arribaAbajo(n) {
  var i = n
  if (n < 51) {
    return function () {
      i++
      return i
    }
  } else {
    return function () {
      i--
      return i
    }
  }
}

var haciaArriba = arribaAbajo(40)
console.log(haciaArriba())
console.log(haciaArriba());
console.log(haciaArriba());
console.log(haciaArriba());
var haciaAbajo = arribaAbajo(70)
console.log(haciaAbajo())
console.log(haciaAbajo());
console.log(haciaAbajo());
console.log(haciaAbajo());
/*---------------------------------------------------*/

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  var i = multiplier
  return function (n) {
    result = i * n
    return result
  }
};

var multPorCuatro = closureMult(4)
console.log(multPorCuatro(10))
var multPorOnce = closureMult(11);
console.log(multPorOnce(9))

/*---------------------------------------------------*/

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  var objeto = {};
  return function cache(arg) {
    if (!objeto.hasOwnProperty(arg)) {
      objeto[arg] = cb(arg);
    }
    return objeto[arg];
  };
}

module.exports = {
  timeConversion,
};
