import React, { Component } from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";
import { v4 as uuidv4 } from "uuid";
import { Header, Grid, GridRow, CardGroup } from "semantic-ui-react";
import FormModal from "./FormModal";

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
        {
          id: 3,
          title: "Hell Divers",
          author: "Nicholas Sansbury Smith",
          pages: 431,
          readStatus: false,
        },
        {
          id: 4,
          title: "The Stand",
          author: "Stephen King",
          pages: 1172,
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
      console.log(
        `${book.readStatus} current library`,
        `${bookData.readStatus} book status to update`
      );
    });
  };

  render() {
    const myLibrary = this.state.library.map((book) => {
      return (
        <div>
          <Grid.Column>
            <BookCard
              key={book.id}
              data={book}
              delBook={this.delBook}
              readStatusHandler={this.readStatusHandler}
            ></BookCard>
          </Grid.Column>
        </div>
      );
    });

    return (
      <div>
        <FormModal>
          <BookForm addBook={this.addBook} />
        </FormModal>
        <br />
        <br />
        <Grid columns={3} celled="internally" divided>
          <GridRow>
            <CardGroup>{myLibrary}</CardGroup>
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default Library;
