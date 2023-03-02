class estudianteNuevo {
  constructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.cursosMatriculados = cursosMatriculados || [];
    this.cursosCursados = cursosCursados || [];
  }

  set setMatricula(curso) {
    console.log(curso);
    this.cursosMatriculados.push(curso);
  }

  get getMatricular() {
    return this.cursosMatriculados;
  }

  set setRetirarMatricula(curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  }

  get getRetirarMatriculas() {
    return this.cursosMatriculados;
  }
  
  cursosAprobados(curso, nota) {
    const calificacion = {};

    calificacion.curso = curso;
    calificacion.nota = nota;
    
    calificacion.estado = nota >= 70 ? 'Aprobado' : 'Reprobado';

    this.cursosCursados.push(calificacion);
  }
}
  
const andy = new estudianteNuevo('Andy', 'Smith', '1990-10-30', 'arq-0001', true, 'Arquitectura');
andy.setMatricula = 'Introducción a la pintura';
andy.setMatricula = 'Historia del Arte I';
console.log(andy.getMatricular);
andy.setRetirarMatricula = 'Introducción a la pintura';
console.log(andy.getRetirarMatriculas);
console.log(andy);