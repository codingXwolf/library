// All book will go here.
let myLibrary = [
    {
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K Rowling',
        pages: 368,
        read: true
    },
    {
        title: 'Hell Divers',
        author: 'Nicholas Sansbury Smith',
        pages: 357,
        read: false
    },
    {
        title: 'The Tattooist of Auschwitz',
        author: 'Heather Morris',
        pages: 288,
        read: false
    },
];

function Book (title, author, pages, read) {
    // Constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary () {
    // will add books to my lbrary
}