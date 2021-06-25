//traemos el paquete

const { Router } = require('express');

//inicializamos el router

const router = Router()

//creacion de los endpoint
router
    .get("/",(req, res) => {
    res.send("Hola mundo con ExpressJS");
    })
    .get("/saludo",(req, res) =>{

        const { query: {nombre, apellido} } = req;
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`,
        });
    })
    .get('/saludo/:nombre', (req, res) =>{
        const { params: { nombre } } = req
        console.log(req.params);
        res.json({
            nombre: params.nombre,
        })
    })
//exportamos la rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
