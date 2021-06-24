//Anteriormente en Clases
function Rectangulo (base,altura){
    this.base=base
    this.altura=altura
}
Rectangulo.prototype.calcularArea= function(){
    return this.base*this.altura
}
var rectangulo=new Rectangulo(6, 3)
console.log(rectangulo.calcularArea())
console.log(rectangulo.base)

//Y ahora...
class Rectangulo2{
    constructor(base,altura){
        this.base=base
        this.altura=altura
    }
    calcularArea(){
        return this.base*this.altura;
    }
}
    var rectangulo2=new Rectangulo2(6, 3)
    console.log(rectangulo2.calcularArea())


// Construir clase Persona y estudiante, extender Estudiante con Persona>
/*
DEBER
*/

/*1. Clase Persona
implementar getters, setter y realizar una implementacion en una Clase llamada Persona*/

class Persona{
    constructor(nombre, apellido, email, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._edad = edad;
    }
//Getter
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get email(){
        return this._email;
    }
    get edad(){
        return this._edad;
    }
    get sexo(){
        return this._sexo;
    }

   //Setters
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set email(email){
        this._email = email;
    }
    set edad(edad){
        this._edad = edad;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }
}

var datos = new Persona('Alejandro', 'Egas', 'alejoegas@outlook.com', 22,'Masculino');
console.log(datos);
//getter
console.log(datos.nombre);
//setter
datos.nombre = 'Alejandro';
//getter
console.log(datos.nombre);

//2
// implementar metodos estaticos - Clase Punto, Function distancia
class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2));