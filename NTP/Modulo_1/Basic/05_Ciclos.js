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