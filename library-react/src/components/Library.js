import React, { Component } from "react";
import Form from "./Form";
import BookCard from "./BookCard";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      title: book.title.value,
      author: book.author.value,
      pages: book.pages.value,
    };
    console.log(newBook);
    this.setState({ library: [...this.state.library, newBook] });
  };

  delBook = (book) => {
    const library = this.state.library.filter((index) => index.id !== book.id);
    this.setState({ library });
  };

  readStatusHandler = (bookData) => {
    console.log(bookData);
    this.state.library.map((book) => {
      if (book.readStatus) {
        const updatedStatus = {
          ...book,
          readStatus: !this.readStatus,
        };
        return updatedStatus;
      } else {
        const updatedStatus = {
          ...book,
          readStatus: this.readStatus,
        };
        return updatedStatus;
      }
    });
  };

  render() {
    const myLibrary = this.state.library.map((book) => {
      return (
        <div>
          <BookCard
            data={book}
            delBook={this.delBook}
            readStatusHandler={this.readStatusHandler}
          ></BookCard>
        </div>
      );
    });

    return (
      <div>
        <Form addBook={this.addBook} />
        {myLibrary}
      </div>
    );
  }
}

export default Library;
