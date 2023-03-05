class Libreria {
  constructor(nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion,
    this.libros = libros || [];
    this.comics = comics || [];
  }

  agregarLibros(libro) {
    this.libros.push(libro);
  }

  agregarComics(comic) {
    this.comics.push(comic);
  }

  getInfo(titulo) {
    let productos = this.libros.concat(this.comics);
    const cantidadProductos = productos.find(nombre => nombre.titulo === titulo);
    if (cantidadProductos.getCantidad === 0) {
      return "No hay ejemplares disponibles";
    } else {
      return cantidadProductos;
    }
  }
}

class Libro {
  #cantidad;
  #anio;

  constructor(titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.#cantidad = cantidad;
    this.#anio = anio;
  }

  set setCantidad(cantidad) {
    this.#cantidad = cantidad;
  }

  get getCantidad() {
    return this.#cantidad;
  }

  set setAnio(anio) {
    this.#anio = anio;
  }

  get getAnio() {
    return this.#anio;
  }
}

class Comic extends Libro {
  constructor (titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen) {
    super (titulo, autor, precio, cantidad, anio);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
}

const nuevaLibreria = new Libreria("Mi librerita", "Coronado");

const nuevoLibro = new Libro("The Lord of the Rings", "J. R. R. Tolkien", 10000, 9, 1955);
nuevoLibro.setCantidad = 10;
nuevoLibro.setAnio = 1954;
// console.log(nuevoLibro);

const nuevoComic = new Comic("The Amazing Spider-Man", "Gerry Conway", 20000, 2, 1972, "Gil Kane", "Marvel Comics", 121);
nuevoComic.setCantidad = 3;
nuevoComic.setAnio = 1973;
// console.log(nuevoComic);

nuevaLibreria.agregarLibros(nuevoLibro);

nuevaLibreria.agregarComics(nuevoComic);

console.log(nuevaLibreria.getInfo("The Lord of the Rings"));
