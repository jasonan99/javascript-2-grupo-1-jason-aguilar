import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const menu = ['Show Books', 'Show Comics', 'Add Book', 'Add Comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
        <img src="./img/logo.svg" class="logo"/>
        ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault(); 
  
        const { id } = event.target
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  

  const showBooks = () => {
  
    let books = bookstore1.getBooks;
    let aux = '';

    mainContent.innerHTML = "";

    books.forEach((book) => {
      aux +=
      `<li>Title: ${book.title}</li>
      <li>Author: ${book.author}</li>
      <li>Price: ${book.price}</li>
      <li>Year: ${book.year}</li>`
    })
  
    mainContent.insertAdjacentHTML (
      'beforeend',
      `<ul>${aux}</ul>`
    )
  }
  
  const showComics = () => {
  
    let comics = bookstore1.getComics;
    let aux = '';

    mainContent.innerHTML = "";

    comics.forEach((comic) => {
      aux +=
      `<li>Title: ${comic.title}</li>
      <li>Author: ${comic.author}</li>
      <li>Price: ${comic.price}</li>
      <li>Illustrator: ${comic.illustrator}</li>
      <li>Publisher: ${comic.publisher}</li>
      <li>Volume: ${comic.volume}</li>
      <li>Year: ${comic.year}</li>`
    })
  
    mainContent.insertAdjacentHTML (
      'beforeend',
      `<ul>${aux}</ul>`
    )
  }
  
  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');

    if(!title || !author || !price || !stock || !year) {
      alert("Please do not enter empty values!");
    }
  
    const book = new Book(title, author, price, stock, year);

    let bookList = bookstore1.getBooks;
    bookList.forEach((item) => {
      if (title === item.title) {
        alert("This book already exist");
      }
    });

    bookstore1.setBooks = book.getInfo();
  }
  
  const addComics = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
    const illustrator = prompt('Illustrator');
    const publisher = prompt('Publisher');
    const volume = prompt('Volume');

    if(!title || !author || !price || !stock || !year || !illustrator || !publisher || !volume) {
      alert("Please do not enter empty values!");
    }

    const comic = new Comic(title, author, price, stock, year, illustrator, publisher, volume);
    
    let comicList = bookstore1.getComics;
    comicList.forEach((item) => {
      if (title === item.title) {
        alert("This comic already exist");
      }
    });

    bookstore1.setComics = comic.getInfo();
  }

  initialize();
})();

//Hecho con ayuda de Heylin Loaiza.