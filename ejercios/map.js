"use strict";

/* 
Crear una función map que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
obtenga el resultado
lo pushee a un nuevo array
devuelva el array final con el resultado de cada una de las llamadas al callback
*/

function math(array, callback) {
  const funcion = (x) => x * 2;
  const result = array.map(funcion);
  callback(result);
}

const array = [1, 2, 3];
math(array, (result) => {
  console.log(result);
});
