//selectors
// let titleInput = document.querySelector('#title');
// let authorInput = document.querySelector('#author');
// let pagesInput = document.querySelector('#pages');
// let readStatus = document.querySelector('#readStatus');
let submitBtn = document.querySelector('#submitBtn');
let readStatusCB = document.querySelector('#readStatus');
let library = document.querySelector('#library');

//event listeners
submitBtn.addEventListener('click', addBookToLibrary);
readStatusCB.addEventListener("click", readStatusInputHandler);

// All book will go here.
let myLibrary = [
    {
        id: 'ed223',
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K Rowling',
        pages: 368,
        readStatus: true
    }
];

// Create new ID string
function createId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

function check() {
    readStatusCB.checked = true;
}

function unCheck() {
    readStatusCB.checked = false;
}

function readStatusInputHandler(status) {
    if(readStatusCB.checked) {
        document.querySelector('.read-label').innerText = 'Read:';
        check();
        return true;
    } else {
      document.querySelector(".read-label").innerText = "Unread:";
      unCheck();
      return false;
    }
}

class Book {
  constructor(title, author, pages, read) {
    this.id = createId();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readStatusInputHandler(read);
  }
}



function addBookToLibrary (event) {
    event.preventDefault();

    console.log(form.readStatus.value);
    let newBook = new Book(form.title.value, form.author.value, form.pages.value, form.readStatus.value);
    console.log(newBook)
    myLibrary.push(newBook);
    form.reset();
    console.log(myLibrary);
    console.log('Book added!');
    displayLibrary();
}

function displayLibrary() {
    let books = document.querySelectorAll('.book');
    books.forEach(book => library.removeChild(book))

    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
        
    }
}

function readStatusDisplay(status) {
  if (status) {
    return "Read";
  } else {
    return "Unread";
  }
}

displayLibrary();

function createBookCard(book) {
  let columnDiv = document.createElement("div");
  columnDiv.className = 'column book'

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  columnDiv.appendChild(cardDiv);

  let headerThree = document.createElement("h3");
  headerThree.innerText = book.title;

  let pAuthor = document.createElement("p");
  pAuthor.innerText = book.author;

  let pPages = document.createElement("p");
  pPages.innerText = book.pages;

  let pReadStatus = document.createElement("p");
  pReadStatus.innerText = readStatusDisplay(book.readStatus);

  cardDiv.appendChild(headerThree);
  cardDiv.appendChild(pAuthor);
  cardDiv.appendChild(pPages);
  cardDiv.appendChild(pReadStatus);

  library.appendChild(columnDiv);
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