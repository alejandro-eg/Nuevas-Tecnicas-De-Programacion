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
(async()=>{
    try {
        var respuesta= await promesa(true)
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
})()