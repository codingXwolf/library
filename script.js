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
    console.log(form)

    console.log(form)
    console.log('Book added!')
}

function createBookCard() {
  let columnDiv = document.createElement("div");
  columnDiv.classList.add("column");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  columnDiv.appendChild(cardDiv);

  let headerThree = document.createElement("h3");
  headerThree.innerText = titleInput.value;

  let pAuthor = document.createElement("p");
  pAuthor.innerText = authorInput.value;

  let pPages = document.createElement("p");
  pPages.innerText = pagesInput.value;

  let pReadStatus = document.createElement("p");
  pReadStatus.innerText = readStatus.value;

  cardDiv.appendChild(headerThree);
  cardDiv.appendChild(pAuthor);
  cardDiv.appendChild(pPages);
  cardDiv.appendChild(pReadStatus);
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