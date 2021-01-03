//selectors
// let titleInput = document.querySelector('#title');
// let authorInput = document.querySelector('#author');
// let pagesInput = document.querySelector('#pages');
// let readStatus = document.querySelector('#readStatus');
let submitBtn = document.querySelector('#submitBtn');
let library = document.querySelector('#library');

//event listeners
submitBtn.addEventListener('click', addBookToLibrary);

// All book will go here.
let myLibrary = [];

// Create new ID string
function createId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

class Book {
  constructor(title, author, pages, read) {
    this.id = createId();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}



function addBookToLibrary (event) {
    event.preventDefault();

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

function createBookCard(item) {
  let columnDiv = document.createElement("div");
  columnDiv.classList.add('book');
  columnDiv.classList.add("column");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  columnDiv.appendChild(cardDiv);

  let headerThree = document.createElement("h3");
  headerThree.innerText = item.title;

  let pAuthor = document.createElement("p");
  pAuthor.innerText = item.author;

  let pPages = document.createElement("p");
  pPages.innerText = item.pages

  let pReadStatus = document.createElement("p");
  pReadStatus.innerText = item.readStatus;

  cardDiv.appendChild(headerThree);
  cardDiv.appendChild(pAuthor);
  cardDiv.appendChild(pPages);
  cardDiv.appendChild(pReadStatus);

  library.appendChild(cardDiv);
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