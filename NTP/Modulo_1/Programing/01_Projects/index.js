const express = require("express");
//genero una aplicacion express
const app = express();
//EndPoint
app.get("/", (req, res) => {
  res.send("Hola mundo con ExpressJSS");
});
app.get("/saludo", (req, res) => {
  //req.query
  //console.log(req.query);
  //Obtener la query del objeto request
  const {
    query: { nombre, apellido },
  } = req;
  //const nombre = req.query.nombre
  //const apellido= req.query.apellido
  /* const {query}=req;
  res.json({
    saludo: `Hola soy ${query. nombre} ${query.apellido}`,
  });
});
*/
  res.json({
    saludo: `Hola soy ${nombre} ${apellido}`,
  });
});
app.get("/saludo/:nombre", (req, res) => {
    const {params}=req;
  /*const {
    params: { nombre },
  } = req;
  //console.log(req.params);
  //const nombre=req.params.nombre*/
  res.json({
    nombre: params.nombre,
  });
});
app.listen(3000, () => {
  console.log("Servidor escuchado en http://localhost:3000");
});
