let desarrollo = "📦";
//vamos a tener la misma estructura que se hizo anteriormente en el ejemplo (promesa.js)

function llenarLaCaja() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      desarrollo += "📦";
      console.log(desarrollo);
      resolve();
    }, 2000);
  });
}

//esta cadena de callblack 

// llenarLaCaja(function () {
//   console.log(desarrollo);

//   llenarLaCaja(function () {
//     console.log(desarrollo);
//     llenarLaCaja(function () {
//       console.log(desarrollo);
//       llenarLaCaja(function () {
//         console.log(desarrollo);
//         llenarLaCaja(function () {
//           console.log(desarrollo);
//         });
//       });
//     });
//   });
// });

//se puede traducir en esto: 
llenarLaCaja()
  .then(() => llenarLaCaja())
  .then(() => llenarLaCaja())
  .then(() => llenarLaCaja())
  .then(() => llenarLaCaja())
  .then(() => llenarLaCaja());
