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

  componentDidMount = () => {
    console.log(this.props)
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
        <Form formData={this.addBookToLibrary}/>
        {myLibrary}
      </div>
    );
  }
}

export default Library;
