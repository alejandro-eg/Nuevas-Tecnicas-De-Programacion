//Promesas 
function promesa(bandera){
    return new Promise((resolve,reject)=>{
        if(bandera){
            setTimeout(() => {
                resolve("Petición Resuelta");
            }, 3000);
        } else{
            setTimeout(() => {
            reject("La operación falló");
        }, 2000);
    }
  })
}
/*promesa(false)
.then((resultado)=>{
    console.log("Respuesta Positiva",resultado)
})
.catch((error)=>{
    console.log("Error",error);
})*/
/*var segundaPromesa=(bandera)=> new Promise((resolve,reject)=>{
    if(bandera){
        setTimeout(() => {
            resolve("Petición Resuelta");
        }, 3000);
    } else{
        setTimeout(() => {
        reject("La operación falló");
    }, 2000);
}
})
promesa(true)
.then((resultado)=>{
    console.log("Respuesta Positiva",resultado)
})
.catch((error)=>{
    console.log("Error",error);
})*/
promesa(true)
.then((resultado)=>{
    console.log("Respuesta Positiva",resultado)
    return segundaPromesa(true)
})
.then((resultado)=>{
    console.log("Respuesta Positiva",resultado)
})
.catch((error)=>{
    console.log("Error",error);
})