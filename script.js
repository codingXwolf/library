//selectors
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readStatus = document.querySelector('#readStatus');
let submitBtn = document.querySelector('#submitBtn');
let library = document.querySelector('#library');

//event listeners
submitBtn.addEventListener('click', addBookToLibrary);

// All book will go here.
let myLibrary = [];

function Book (id, title, author, pages, read) {
    // Constructor...
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Create new ID string
function createId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

function addBookToLibrary (event) {
    event.preventDefault();
    console.log(event.target);
    // will add books to my lbrary
    let newId = createId();

    let cardDiv = document.createElement('div');


    console.log('Book added!')
}

function removeBookFromLibrary(id) {
    let index = myLibrary.map(element => {
        return element.id;
    }).indexOf(id);

    myLibrary.splice(index, 1);
    console.log('Book is removed!');
    console.log(myLibrary);
    displayLibrary();
}

function changeReadStatus(readStatus) {
    // will get back to this.
}