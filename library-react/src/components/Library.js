import React, { Component } from "react";
import Form from './Form';
import BookCard from './BookCard';



class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [
        {
          id: 1,
          title: "Harry Potter and the Philosophers Stone",
          author: "J.K Rowling",
          pages: 368,
          readStatus: true,
        },
        {
          id: 2,
          title: "Eragon",
          author: "Christopher",
          pages: 250,
          readStatus: false,
        },
      ],
    };
  }

  // Add Book
  addBook = (book) => {
    const newBook = {
      id: 4,
      title: book.title.value,
      author: book.author.value,
      pages: book.pages.value
    }
    console.log(newBook);
    this.setState({ library: [...this.state.library, newBook]})
  }

  delBook = (book) => {
    console.log(book);
    const library = this.state.library.filter(index => index.id !== book.id);
    this.setState({ library })
  }
  
  
  render() {

    const myLibrary = this.state.library.map((book) => {
      return (
        <div>
          <BookCard
            data={book}
            delBook={this.delBook}
          >
          </BookCard>
        </div>
      );
    });

    return (
      <div>
        <Form addBook={this.addBook}/>
        {myLibrary}
      </div>
    );
  }
  
}

export default Library;
