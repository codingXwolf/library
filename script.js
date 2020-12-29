// All book will go here.
let myLibrary = [
    {
        id: 'c1',
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K Rowling',
        pages: 368,
        read: true
    },
    {
        id: 'c2',
        title: 'Hell Divers',
        author: 'Nicholas Sansbury Smith',
        pages: 357,
        read: false
    },
    {
        id: 'c3',
        title: 'Eragon',
        author: 'Christopher Paolini',
        pages: 503,
        read: true
    },
    {
        id: 'c4',
        title: 'The Tattooist of Auschwitz',
        author: 'Heather Morris',
        pages: 288,
        read: false
    },
];

//Display list of book on page
myLibrary.forEach(book => {
    let readStatus = book.read ? `unread` : `read`;
    document.getElementById("library").innerHTML += `
  <div class="column">
    <div class="card">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read Status: ${book.read}</p>
      <button>delete</button>
      <button>${readStatus}</button>
    </div>
  </div>`;
})

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

function addBookToLibrary (title, author, pages, read) {
    // will add books to my lbrary
    let newId = createId();

    let newBook = new Book(newId, title, author, pages, read);
    myLibrary.push(newBook);

    console.log('Book added!')
    console.log(myLibrary);
}

function removeBookFromLibrary(id) {
    let index = myLibrary.map(element => {
        return element.id;
    }).indexOf(id);

    myLibrary.splice(index, 1);

    console.log('Book is removed!');
    console.log(myLibrary);
}

function changeReadStatus(readStatus) {
    // will get back to this.
}