import React, { Component } from "react";
import {Form, Input, Button} from 'semantic-ui-react';


class BookForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      pages: 0,
      readStatus: false
    }

  }

 handleChangeInput= (e) => {
 
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(this.state);
}

onSubmit = (e) => {
 e.preventDefault();
console.log(e.target, 'button is being pressed');
debugger;

this.props.addBook(e.target);

this.setState({
  title: "",
  author: "",
  pages: 0,
  readStatus: false,
});

}

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Input
              style={{ width: 200, margin: "0 10px" }}
              size="small"
              type="text"
              className="input"
              placeholder="Enter Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeInput}
            />
          </Form.Field>

          <Form.Field>
            <Input
              style={{ width: 200, margin: "0 10px" }}
              size="small"
              type="text"
              className="input"
              placeholder="Author"
              name="author"
              value={this.state.author}
              onChange={this.handleChangeInput}
            />
          </Form.Field>

          <Form.Field>
            <Input
              style={{ width: 200, margin: "0 10px" }}
              type="number"
              className="input"
              placeholder="Pages"
              name="pages"
              value={this.state.pages}
              onChange={this.handleChangeInput}
            />
          </Form.Field>

          <Form.Field>
            <Button style={{margin: "0 10px" }}>Add</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default BookForm;
