class Bookstore {
  #bookstoreName;
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }
  // getters
  get getBooks() {
    return this.#books;
  }
  get getComics() {
    return this.#comics;
  }
  get getName() {
    return this.#bookstoreName
  }
  // setters
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }
  set setAddress(address) {
    this.#address = address;
  }
  set setBooks(book) {
    this.#books.push(book);
  }
  set setComics(comic) {
    this.#comics.push(comic);
  }
}

export default Bookstore;