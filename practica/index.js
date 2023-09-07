"use strict";

//practica de callback

// const array = ["kelvin", "abache", "kelly"];

// const recorrido = (data,callback) => {
//     for(const datas of data){
//         callback(datas)
//     }
// };

// recorrido(array,(data,err)=>{
//      if(err) console.error('tenemos un error al procesar los datos');
//      console.log(data)
//})

//cambiar el sentido de las palabras

const cambioDeSentido = (palabra, callback) => {
  const logitud = palabra.length -1;

  for (let palabraEntera = 0; palabraEntera < logitud; palabraEntera ++) {
    callback(palabra[logitud - palabraEntera]);
  }
};

cambioDeSentido("hola mundo", (palabra, err) => {
  if (err)
    console.error("tenemos un problema en cambiar la logitud de la paralabra");
    console.log(palabra);
});
