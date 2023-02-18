function estudianteNuevo(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
    const datos = {};
  
    datos.nombre = nombre;
    datos.apellidos = apellidos;
    datos.fechaNacimiento = fechaNacimiento;
    datos.id = id;
    datos.nuevoIngreso = nuevoIngreso;
    datos.carrera = carrera;
    datos.cursosMatriculados = cursosMatriculados || [];
    datos.cursosCursados = cursosCursados || [];
    
    datos.matricular = function(curso) {
      this.cursosMatriculados.push(curso)
    }
  
    datos.retirarMatricula = function(curso) {
      const index = this.cursosMatriculados.indexOf(curso);
      if (index > -1) {
        this.cursosMatriculados.splice(index, 1);
      }
  
      // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
    }
    
    datos.cursosAprobados = function(curso, nota) {
      datos.cursosCursados.push({curso, nota});
      datos.cursosCursados[datos.cursosCursados.length - 1].estado = nota >= 70 ? 'Aprobado' : 'Reprobado';
    }
  
    return datos;
  }
  
  const andy = estudianteNuevo('Andy', 'Smith', '1990-10-30', 'a-0001', true, 'Historía del Arte', ['Introducción a la pintura']);
  const ana =  estudianteNuevo('Ana', 'Patel', '1990-10-30', 'arq-0001', true, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I']);
  // console.log(ana);
  
  const listaEstudiantes = [];
  listaEstudiantes.push(andy)
  listaEstudiantes.push(ana)
  
  // console.log(listaEstudiantes);
  // console.log(andy);
  
  andy.matricular('Historia del Arte I');
  ana.retirarMatricula('Historia del Arte I')
  
  andy.cursosAprobados('Introducción a la pintura', 50)
  andy.cursosAprobados('Historia del Arte I', 80)
  
  console.log(andy)