//Traer el paquete
const { Router } = require('express');
//inicializar el router
const router = Router()
//Crear los Endpoint
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
//Exportar las Rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
