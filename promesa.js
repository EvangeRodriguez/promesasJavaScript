let desarrollo = new Promise(function (resolve, reject) {
  //nuestra promesa tiene un tiempo para ser cumplida
  setTimeout(() => {
    //nuestra promesa es entregar "📦"
    const proyecto = "📦";
    // con un número alatoreo vamos a poder imprimir en la consola un resultado
    let alatoreo = Math.random();
    //si está correcto vamos a devolver el producto "📦"
    if (alatoreo < 0.4) {
      resolve(proyecto);
    } else {
      //si hay un error vamos a devolver "❌no entregado a tiempo"
      reject("❌no entregado a tiempo");
    }
  }, 1000);
});

desarrollo
  //cuando necesitamos que en la consola nos aparezca el proyecto correcto
  .then((proyecto) => console.log(proyecto))
  //cuando necesitamos que en la consola nos aparezca el proyecto con un error
  .catch((error) => console.log(error))
  //cuando una promesa ya está finalizada tenga error o no. Nos sirve por ejemplo para cerrar una ventana
  .finally(() => console.log("PROMESA FINALIZADA"));
