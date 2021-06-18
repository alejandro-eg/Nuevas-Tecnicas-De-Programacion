//Asignacion 
//=
/*Comparacion 
==
//===
console.log(2 == 2);
console.log(2 ==='2');
console.log(2 =='2');
*/
/*
!=
console.log(2 != 3);
*/
/*
>
>=
<
<=
*/
//Operadores de Asignacion Compuestos
 /*
 += / x = x + y
 -= / x = x - y
  += / x = x + y
 -= / x = x - y
  += / x = x + y
 -= / x = x - y
 *=
/=
%=
**=
var n = 3;
n -=2;
console.log(n);

//Destructurar Objetos 1 
var persona = { nombre: "Alejandro", apellido: "Egas" };
var { nombre } = persona;
console.log(persona);
console.log(nombre);
*/
//Destructurar Oobjetos 2
var persona = { nombre: "Alejandro", 
    apellido: "Egas", 
    edad: 22, 
    viajes: { destino1: "Holanda", destino2: "Canadá" } };


var { nombre:nf2, apellido, viajes: {destino1 } } = persona;

console.log(persona);
console.log(nf2);
console.log(apellido);
console.log(destino1);