function modify(array, callback) { //En los paramentro estamos pasando, va a resivir un arreglo y una funcion
  //hacer algo
  array.push("kelvin");

  //depues haces algo aqui
  callback(array); //iniciamos la funcion que , tenemos en los algumentos
}

const names = ["kelvin", "manuel", "kelvin"];

modify(names, function (array) { // el callback es una segunda funcion que pasamos en los algumento, para ejecutar un valor o error 
  console.log(`he modificado el arreglo ahora es de ${array.length}`);
});
