class Book {
  constructor() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = Boolean(read);
  }
}

const container = document.getElementById("main").appendChild(document.createElement('div'));
      container.classList.add('container', 'content-container');
      container.id = 'container';
const libraryContainer = container.appendChild(document.createElement('div'));
      libraryContainer.classList.add('container', 'library-container');
const addBookForm = container.appendChild(document.createElement('form'));
      addBookForm.id = "add-book-form";
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
const addBookButton = container.appendChild(document.createElement('button'));
      addBookButton.classList.add('button', 'btn', 'add-book-button');
      addBookButton.id = 'add-book-button';
      addBookButton.textContent = 'Add New Book to Library';
      addBookButton.addEventListener('click', () => clickShowForm())

let myLibrary = [
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: 304,
    read: false
  },
  {
    author: "Tom Clancy",
    title: "The Hunt for Red October",
    pages: 387,
    read: false
  },
  {
    author: "John Stuart Mill",
    title: "On Liberty",
    pages: 212,
    read: false
  },
  {
    author: "George Orwell",
    title: "1984",
    pages: 328,
    read: false
  }
];

function addBookToLibrary() {
  // First sort through existing books in myLibrary 
  //to see if it exists. If it does, do nothing or 
  //return an error message
  console.log('addBookToLibrary function called')
  // If it does not already exist, add it to the 
  //myLibrary array.
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
}

function clickHandler(e) {
  if (alreadyInLibrary()) {
    return null;
  } else {
    addBookToLibrary();
  };
  displayBooks();
}

function showForm() {

}

function displayBooks() {
  let allBooks = document.querySelectorAll('article');
  allBooks.forEach(book => book.remove())

  for (let i = 0; i < myLibrary.length ; i++) {
    let aBook = myLibrary[i];
    let spinalTitle = aBook.title.split(' ').join('-').toLowerCase();
    const aBookCard = libraryContainer.appendChild(document.createElement('article'));
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
          bookPages.textContent = aBook.pages.toString() + ' pages';
    const bookReadLabel = aBookCard.appendChild(document.createElement('label'));
          bookReadLabel.textContent = "Read? "
    const bookRead = bookReadLabel.appendChild(document.createElement('input'));
          bookRead.type = "checkbox";
          bookRead.checked = aBook.read;
  }
}

let helloWorld = document.getElementById('hello-world');
helloWorld.removeChild(helloWorld.firstElementChild);
//let hideForm = document.getElementById('add-book-form').children;
//hideForm.style.display = 'hidden';

displayBooks();