import React, { Component } from "react";
//import Card from './Card';
import Form from './Form';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [
        {
          title: "Harry Potter and the Philosophers Stone",
          author: "J.K Rowling",
          pages: 368,
          readStatus: true,
        },
        {
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

  render() {
    const myLibrary = this.state.library.map((book) => {
      return(
        <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.pages}</p>
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
