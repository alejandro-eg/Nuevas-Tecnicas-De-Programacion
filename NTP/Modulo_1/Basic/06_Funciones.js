// Funciones Declarativas
//Retorno de Valores
function saludar(){
    return "Hola soy Alejandro";
}
//Funciones void
function saludar2 (){
    console.log("Hola soy Sheldon");
}
//Funciones con Parametros
function saludarConParametros(nombre,apellido){
    return `Hola soy ${nombre} ${apellido}`
    //console.log(saludarConParametros("Alejandro", "Egas"));
}
//Funciones con Parametros por Defecto
function saludarconProfesion(nombre = "Persona", profesion = "Informatico"){
    return `Hola ${nombre} mi prefesion es ${profesion}`
}
//console.log(saludarconProfesion("Alejandro Egas", "Informático"));
//Funciones Expresivas- Funciones Anonimas 
var saludoConEdad=function(nombre,edad){
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Alejandro Egas", 22));
//ARROW FUNCTIONS- FUNCIONES FLECHA
var saludoConApellido = (nombre,apellido) => `Hola soy ${nombre} ${apellido}`
var suma = (n1, n2)=> n1+n2
//console.log(saludoConApellido("Alejandro","Egas"));
//console.log (suma(2,3));
//Funciones como Parametros de otras funciones 
function saludoConFunciones(nombre,cb){
    return cb(nombre)
}
var miSaludo = saludoConFunciones("Gabriel", function (nombre){
    return `Hola soy ${nombre}`
})
var miSaludo2 = saludoConFunciones("Alejandro",(nombre)=>`Hola soy ${nombre}`)
console.log(miSaludo2);
/*setTimeout(()=>{
    console.log("Hola Mundo");
}, 3000);
setInterval(() => {
    console.log("Hola Mundo");
}, 2000);
saludar() 
var resultado= saludar();
console.log(resultado);
console.log(saludar());
saludar2()
*/