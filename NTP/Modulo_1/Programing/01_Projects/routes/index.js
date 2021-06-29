//Traer el paquete
const { Router } = require('express');
const { DataValidator }= require('../Middlewears/DataValidator');
const { User }= require('../lib/Schema/User');
//inicializar el router
const router = Router()
//Crear los Endpoint
router
    .get("/",(req, res) => {
    res.send("Hola mundo con ExpressJS");
    })
    .get("/saludo",DataValidator(User,"query"), (req, res) =>{
        const { query } = req;
        res.json({
            saludo: `Hola soy ${query.nombre} ${query.apellido}`,
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
