class Book {
  constructor(
    title = 'unknown',
    author = 'unknown',
    pages = 0,
    read = false,
    id = 1
  ) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = Boolean(read);
    this.id = id;
  }
}

const overlay = document.getElementById("main").appendChild(document.createElement('div'));
      overlay.classList.add('overlay', 'hidden-overlay');
      overlay.addEventListener('click', () => handleOverlayClick());
const container = document.getElementById("main").appendChild(document.createElement('div'));
      container.classList.add('container', 'content-container');
      container.id = 'container';
const libraryContainer = container.appendChild(document.createElement('div'));
      libraryContainer.classList.add('container', 'library-container');
const addBookForm = container.appendChild(document.createElement('form'));
      addBookForm.id = "add-book-form";
      addBookForm.classList.add('hidden-form');
const addBookLabelTitle = addBookForm.appendChild(document.createElement('label'));
      addBookLabelTitle.textContent = "Title: "
const addBookInputTitle = addBookLabelTitle.appendChild(document.createElement('input'));
      addBookInputTitle.type = "text";
      addBookInputTitle.name = "form-title";
      addBookInputTitle.classList.add('input', 'input-title');
const addBookLabelAuthor = addBookForm.appendChild(document.createElement('label'));
      addBookLabelAuthor.textContent = "Author: "
const addBookInputAuthor = addBookLabelAuthor.appendChild(document.createElement('input'));
      addBookInputAuthor.type = "text";
      addBookInputAuthor.name = "form-author";
      addBookInputAuthor.classList.add('input', 'input-author');
const addBookLabelPages = addBookForm.appendChild(document.createElement('label'));
      addBookLabelPages.textContent = "Pages: "
const addBookInputPages = addBookLabelPages.appendChild(document.createElement('input'));
      addBookInputPages.type = "number";
      addBookInputPages.name = "form-pages";
      addBookInputPages.classList.add('input', 'input-pages');
const addBookLabelRead = addBookForm.appendChild(document.createElement('label'));
      addBookLabelRead.textContent = "Read? "
const addBookInputRead = addBookLabelRead.appendChild(document.createElement('input'));
      addBookInputRead.type = "checkbox";
      addBookInputRead.name = "form-read";
      addBookInputRead.classList.add('input', 'input-read');
      addBookInputRead.checked = false;
const addBookSubmitButton = addBookForm.appendChild(document.createElement('button'));
      addBookSubmitButton.type = "button";
      addBookSubmitButton.name = "form-submit";
      addBookSubmitButton.textContent = "Submit New Book";
      addBookSubmitButton.classList.add('input', 'input-submit');
      addBookSubmitButton.addEventListener('click', () => clickHandler())
const addBookButton = container.appendChild(document.createElement('button'));
      addBookButton.classList.add('button', 'btn', 'add-book-button');
      addBookButton.id = 'add-book-button';
      addBookButton.textContent = '+';
      addBookButton.addEventListener('click', () => clickShowForm())

let myLibrary = [
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: 304,
    read: true,
    id: 1
  },
  {
    author: "Tom Clancy",
    title: "The Hunt for Red October",
    pages: 387,
    read: true,
    id: 2
  },
  {
    author: "John Stuart Mill",
    title: "On Liberty",
    pages: 212,
    read: true,
    id: 3
  },
  {
    author: "George Orwell",
    title: "1984",
    pages: 328,
    read: false,
    id: 4
  }
];

let nextID = 5;

function addBookToLibrary() {
  console.log('addBookToLibrary function called')
  let title = document.getElementsByName('form-title')[0].value;
  let author = document.getElementsByName('form-author')[0].value;
  let pages = document.getElementsByName('form-pages')[0].value;
  let read = document.getElementsByName('form-read')[0].checked;
  let id = nextID;
  myLibrary.push(new Book(title, author, pages, read, id))
  document.getElementsByName('form-title')[0].value = '';
  document.getElementsByName('form-author')[0].value = '';
  document.getElementsByName('form-pages')[0].value = '';
  document.getElementsByName('form-read')[0].checked = false;
  nextID++;
  displayBooks();
  handleOverlayClick();
}

function changeReadColor() {
  let bookCardsInView = Array.from(document.getElementsByClassName('book-nest'));
  console.log(bookCardsInView[0].firstElementChild.lastChild.lastChild.checked);
  for (let i = 0; i < bookCardsInView.length; i++) {
    if (bookCardsInView[i].firstElementChild.lastChild.lastChild.checked) {
      bookCardsInView[i].firstElementChild.classList.add('book-card-read');
      bookCardsInView[i].firstElementChild.classList.remove('book-card');
      console.log(bookCardsInView[i].id.split('nest')[1])
      for (let j = 0; j < myLibrary.length; j++) {
        if (parseInt(bookCardsInView[i].id.split('nest')[1]) === myLibrary[j].id) {
          myLibrary[j].read = true;
        }
      }    
    } else {
      bookCardsInView[i].firstElementChild.classList.add('book-card');
      bookCardsInView[i].firstElementChild.classList.remove('book-card-read');
      for (let j = 0; j < myLibrary.length; j++) {
        if (parseInt(bookCardsInView[i].id.split('nest')[1]) === myLibrary[j].id) {
          myLibrary[j].read = false;
        }
      }    
    }
  }
  console.log(myLibrary);
}

function alreadyInLibrary() {
  let inLibrary = false;
  let formTitle = document.getElementsByName('form-title')[0].value;
  let formAuthor = document.getElementsByName('form-author')[0].value;
  
  for (let i = 0; i < myLibrary.length; i++) {
    console.group('Checking...');
    console.log(formTitle + ' : ' + myLibrary[i].title);
    if (formTitle == myLibrary[i].title) {
      console.log('The title already exists...');
      if (formAuthor == myLibrary[i].author) {
        console.log(formAuthor + ' : ' + myLibrary[i].author);
        inLibrary = true;
        console.log("... and it's by the same author.");
      }
    }
    console.groupEnd('Checking...');
  }
  console.log('inLibrary is: ' + inLibrary);
  return inLibrary;
}

function clickShowForm(e) {
  showForm();
  changeReadColor();
}

function clickHandler(e) {
  // First sort through existing books in myLibrary 
  //to see if it exists. If it does, do nothing or 
  //return an error message
  if (alreadyInLibrary()) {
    return null;
  } else {
    addBookToLibrary();
  };
  displayBooks();
}

function handleOverlayClick(e) {
  hideForm();
}

function removeBook(e) {
  let removeID = parseInt(e.split('remove')[1]);
  console.log(removeID);
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === removeID) {
      myLibrary.splice(i, 1);
    }
  }
  console.log(myLibrary);
  let killBook = document.getElementById(e);
  killBook.parentNode.remove();
}

function hideForm() {
  overlay.classList.add('hidden-overlay');
  addBookForm.classList.add('hidden-form');
  addBookButton.classList.add('add-book-button');
  addBookButton.classList.remove('add-book-button-clicked');
}

function showForm() {
  addBookForm.classList.remove('hidden-form');
  overlay.classList.remove('hidden-overlay');
  addBookButton.classList.add('add-book-button-clicked');
  addBookButton.classList.remove('add-book-button')
}

function displayBooks() {
  let allBooks = document.querySelectorAll('article');
  allBooks.forEach(book => book.remove())

  for (let i = 0; i < myLibrary.length ; i++) {
    let aBook = myLibrary[i];
    let spinalTitle = aBook.title.split(' ').join('-').toLowerCase();
    const aBookNest = libraryContainer.appendChild(document.createElement('article'));
          aBookNest.classList.add('book-nest');
          aBookNest.id = "nest" + aBook.id.toString();
    const aBookCard = aBookNest.appendChild(document.createElement('div'));
          aBookCard.classList.add('book-card');
          aBookCard.id = spinalTitle;
    const bookTitle = aBookCard.appendChild(document.createElement('h4'));
          bookTitle.classList.add('book-title');
          bookTitle.textContent = aBook.title;
    const bookAuthor = aBookCard.appendChild(document.createElement('h4'));
          bookAuthor.classList.add('book-author');
          bookAuthor.textContent = aBook.author;
    const bookPages = aBookCard.appendChild(document.createElement('p'));
          bookPages.classList.add('book-pages');
        if (aBook.pages === 1) {
          bookPages.textContent = aBook.pages.toString() + ' page';
        } else {
          bookPages.textContent = aBook.pages.toString() + ' pages';
        }
    const bookReadLabel = aBookCard.appendChild(document.createElement('label'));
          bookReadLabel.textContent = "Read? "
          bookReadLabel.classList.add('book-read-label');
    const bookRead = bookReadLabel.appendChild(document.createElement('input'));
          bookRead.type = "checkbox";
          bookRead.classList.add('book-read');
          bookRead.checked = aBook.read;
          bookRead.addEventListener('click', () => changeReadColor())
          bookRead.id = "read" + aBook.read.toString();
    const bookRemoveButton = aBookNest.appendChild(document.createElement('button'));
          bookRemoveButton.name = aBook.title.toString();
          bookRemoveButton.id = "remove" + aBook.id.toString();
          bookRemoveButton.addEventListener('click', () => removeBook(bookRemoveButton.id));
          bookRemoveButton.classList.add('button', 'remove-button');
          bookRemoveButton.textContent = 'x';

  }
  changeReadColor();
}

let helloWorld = document.getElementById('hello-world');
helloWorld.removeChild(helloWorld.firstElementChild);

displayBooks();