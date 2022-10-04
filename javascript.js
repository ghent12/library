const container = document.getElementById("main").appendChild(document.createElement('div'));
      container.classList.add('container', 'content-container');
      container.id = 'container';
const addBookButton = container.appendChild(document.createElement('button'));
      addBookButton.classList.add('button', 'btn', 'add-book-button');
      addBookButton.id = 'add-book-button';
      addBookButton.textContent = 'Add Book to Library';

let myLibrary = [
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: 304,
    read: true
  },
  {
    author: "Tom Clancy",
    title: "The Hunt for Red October",
    pages: 387,
    read: true
  },
  {
    author: "John Stuart Mill",
    title: "On Liberty",
    pages: 212,
    read: true
  },
  {
    author: "George Orwell",
    title: "1984",
    pages: 328,
    read: false
  }
];

class Book {
  constructor() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = Boolean(read);
  }

  addBookToLibrary() {
    // First sort through existing books in myLibrary 
    //to see if it exists. If it does, do nothing or 
    //return an error message
  
    // If it does not already exist, add it to the 
    //myLibrary array.
  
  }
}

function displayBooks() {

}

displayBooks()