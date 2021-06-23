const express = require('express');
//genero una aplicacion express
const app =express()
//EndPoint
app.get('/',(req,res)=>{
    res.send("Hola mundo con ExpressJSS")
})
app.listen(3000,()=>{
    console.log("Servidor escuchado en http://localhost:3000");
})
