function modify(array, callback) { //En los paramentro estamos pasando, va a resivir un arreglo y una funcion
  //hacer algo
  array.push("kelvin");
 
 // ahora callback con asincronismos 
  setTimeout(() => {
    callback(array); //iniciamos la funcion que , tenemos en los algumentos    
  }, 2000);
}

const names = ["kelvin", "manuel", "kelvin"];

modify(names, function (array) { // el callback es una segunda funcion que pasamos en los algumento, para ejecutar un valor o error 
  console.log(`he modificado el arreglo ahora es de ${array.length}`);
});

// un callback podemos decir es una funcion, que devuelve un valor mediante otra funcion