class Persona {
  constructor (nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

  saludar () {
    return ` Hola! ${this.nombre} ${this.apellido}`;
  }
}

// const jorge = new Persona('Jorge', 'Mora', 06556, 24, 'San José');
// console.log(jorge.saludar());

class Empleado extends Persona {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso){
    super(nombre, apellido, id, edad, ubicacion);
    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.ingreso = ingreso;
  }

  imprimirSueldo () {
    return this.sueldo * 12;
  }
}

// const sueldoEmpleadoH = new Empleado('Jorge', 'Mora', 06556, 24, 'San José', 3000);
// console.log(sueldoEmpleadoH.imprimirSueldo());

//Práctica realizada con Heylin, Javier y Camila
class Desarrollador extends Empleado {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, lenguajes){
    super(nombre, apellido, id, edad, ubicacion, sueldo);
    this.lenguajes = lenguajes || [];
  }

  lenguajeDominado(){
    let lenguajeMayor = {nombreDeLenguaje:"", conocimiento: 0};

    for (let i = 0; i < this.lenguajes.length; i++) {
      if(this.lenguajes[i].conocimiento > lenguajeMayor.conocimiento){
        lenguajeMayor = this.lenguajes[i];
      }
    }

    return lenguajeMayor;
  }
  agregarLenguaje(nombreLenguaje, calificacion){
    this.lenguajes.push({nombreDeLenguaje: nombreLenguaje, conocimiento: calificacion});
  }

} 

const DesarrolladorUno = new Desarrollador('Jorge', 'Mora', 06556, 24, 'San José', 3000, [{nombreDeLenguaje: "javascript", conocimiento: 70}]);

DesarrolladorUno.agregarLenguaje("Python", 40);
DesarrolladorUno.agregarLenguaje("C++", 30);
//console.log(DesarrolladorUno.lenguajeDominado());
//console.log(DesarrolladorUno.lenguajes);
console.log(DesarrolladorUno);
