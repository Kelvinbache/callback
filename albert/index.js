//tambien podemos hacer que los callback, resivan una valor en cierto tiempo, y lo retornen en otro tiempo

// function data(a, b, callback) {
//   callback(a + b);
// }

// data(1, 2, (result) => { //podemos pasar una funcion en los algumentos, de otra funcion
//   console.log(result);
// });

function baseaData(callback) {
  setTimeout(() => {
    const user = [
      {
        id: 1,
        user: "kelvin",
        telefono: 4546545645465,
      },
      { id: 2, user: "kelly", telefono: 4546545645465 },
      {
        id: 3,
        user: "manuel",
        telefono: 4546545645465,
      },
    ];
    callback(user);
  }, 500);
}

baseaData((user) => {
  console.log(user);
});
