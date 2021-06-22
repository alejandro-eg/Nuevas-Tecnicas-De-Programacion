var numeros = [1, 2, 3, 4, 5]
var nuevoNumeros=numeros.concat([6, 7, 8, 9, 0])
//console.log(numeros)
//console.log(nuevoNumeros)
//JOIN
var nombre=["a","l","e","j","a","n","d","r","o"]
//console.log(nombre.join("="));
//SLICE
//console.log(nombre.slice(2));
//INDEX OF
//console.log(nombre.indexOf("a"));
//LAST INDEX OF 
//console.log(nombre.lastIndexOf("a"));
//REVERSE 
//console.log(nombre.reverse("a"));
//SORT
var nd = [2,1,5,7,9,0,4]
//console.log(nd.sort());
//SIFT
//console.log(nd.shift());
//POP
//console.log(nd.pop());
//PUSH
nd.push(1012)
//console.log(nd);
//MAP
var pares = [2, 4, 6, 8, 10]
//console.log(pares.map((elemento) => elemento +1));

/*-----Consulta Funciones Arreglos-----*/

// FOREACH
numeros.forEach(item =>{
//console.log(item);
});
//INCLUDES
//console.log(numeros.includes(7));
//FILTER
var filtro = numeros.filter(n => n>1);
//console.log(filtro);
//REDUCE 
var acum = numeros.reduce((total,value)=>total+value,0);
//console.log(acum);
//EVERY
var menSiete=numeros=numeros.every(n => n<7);
console.log(menSiete);