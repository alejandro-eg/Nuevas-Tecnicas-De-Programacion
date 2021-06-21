 /*while(condition) {

}
for(let index =0; index  < Array.length; index++)
{
    const element = array[index];
}
*/
// for in 
var persona = {
nombre: "Alejandro",
apellido: "Egas",
viajes: ["",""]
}
for (const key in persona){
    console.log(persona[key])
}
//for of

var iterable=[1,2,3,4,5]
var iterable2="Alejandro"
for (const valor of iterable2) {
    console.log(valor);
}