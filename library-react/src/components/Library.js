import React, { Component } from "react";
//import Card from './Card';
import Form from './Form';
import { Card } from 'antd';

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

  delBook = (e) => {
    console.log(e.target);
  }
  
  
  render() {

    const myLibrary = this.state.library.map((book) => {
      console.log(book);
      return (
        <div>
          <Card
            key={book.id}
            size="small"
            title={book.title}
            style={{ width: 300 }}
            hoverable="true"
          >
            <p>{book.author}</p>
            <p>{book.pages}</p>
            <button onClick={}>X</button>
          </Card>
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
