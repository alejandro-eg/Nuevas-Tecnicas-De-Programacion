//Traer el paquete
const { Router } = require('express');
const datos = require('../data.json');
//inicializar el router
const srouter = Router()
//Crear los Endpoint
srouter
    .get("/users",(req, res) => {
        var modifiedData=datos.map((persona)=>{
            persona.first_name=persona.first_name.toUpperCase()
            persona.last_name=persona.last_name.toUpperCase()
            persona.gender=persona.gender.toUpperCase()
            return persona
        })
    res.json({
        msg: "Lista de Usuarios con MAYÚSCULAS",
        body: datos,
    })
    })
    .get("/users-query",(req, res) =>{
        const { query: {id} } = req;
        var personaid = datos.find(user => user.id === parseInt(id))
        if (personaid) {
            res.json({
                msg: "Datos del Usuario "+ id+": ",
                 body: personaid,
            });
        } else {
        res.json({
            msg: "NO Realizó una Consulta",
            body: datos,
        });
    }
    })
    .get('/users-params/:last_name', (req, res) =>{
        const { params: {last_name } } = req
        var apellidoPersona = datos.find(apellidousuario => apellidousuario.last_name === last_name)
        if (apellidoPersona) {
             res.json({
                msg: "El email del usuario de apellido "+last_name+" es:",
                body: [`email: ${apellidoPersona.email}}`],
            });
        } else {
             res.json({
                msg: "El apellido "+last_name+ " no existe",
                body: [null],
            });
        }
    })
//Exportar las Rutas
module.exports.sRouterIndex = srouter

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }