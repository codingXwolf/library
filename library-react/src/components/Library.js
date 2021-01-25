import React, { Component } from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";
import { v4 as uuidv4 } from "uuid";
import { Header, Icon, CardGroup } from "semantic-ui-react";

class Library extends Component {
  constructor(props) {
    super(props);

    // const localData = Object.keys(localStorage).reduce(function (obj, str) {
    //   obj[str] = localStorage.getItem(str);
    //   return obj;
    // }, {});

    // console.log(localData);

    this.state = {
      library: [
        // {
        //   id: 1,
        //   title: "Harry Potter and the Philosophers Stone",
        //   author: "J.K Rowling",
        //   pages: 368,
        //   readStatus: true,
        // },
        // {
        //   id: 2,
        //   title: "Eragon",
        //   author: "Christopher",
        //   pages: 250,
        //   readStatus: false,
        // },
        // {
        //   id: 3,
        //   title: "Hell Divers",
        //   author: "Nicholas Sansbury Smith",
        //   pages: 431,
        //   readStatus: true,
        // },
        // {
        //   id: 4,
        //   title: "The Stand",
        //   author: "Stephen King",
        //   pages: 1172,
        //   readStatus: null,
        // },
      ],
    };
  }

  componentDidMount = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage[key];
      console.log(JSON.parse(value));
      this.setState({library: [...this.state.library, JSON.parse(value)]});
      debugger;
    }
  }

  // Add Book
  addBook = (book) => {
    const convertReadStatus = book.readStatus.value === "true" ? true : false;

    const newBook = {
      id: uuidv4(),
      title: book.title.value,
      author: book.author.value,
      pages: book.pages.value,
      readStatus: convertReadStatus,
    };

    this.setState({ library: [...this.state.library, newBook] });

    localStorage.setItem(newBook.id, JSON.stringify(newBook));
    console.log(JSON.parse(localStorage.getItem(`${newBook.id}`)));
  };

  delBook = (book) => {
    const library = this.state.library.filter((index) => index.id !== book.id);
    this.setState({ library });
  };

  render() {

    const myLibrary = this.state.library.map((book) => {
      return (
        <React.Fragment key={book.id}>
          <BookCard data={book} delBook={this.delBook}></BookCard>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <Header
          as="h1"
          size="huge"
          textAlign="center"
          style={{ margin: 0, padding: "10px" }}
        >
          My Library
          <Icon name="book" />
        </Header>
        <BookForm addBook={this.addBook} />
        <br />
        <br />
        <CardGroup centered doubling>
          {myLibrary}
        </CardGroup>
      </React.Fragment>
    );
  }
}

export default Library;
