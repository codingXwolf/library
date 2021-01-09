import React, { Component } from "react";
import {Form, Input, Button, Switch,} from 'antd';


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
        <Form
          size="small"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onSubmit={this.onSubmit}
        >
          <Form.Item>
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
          </Form.Item>

          <Form.Item>
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
          </Form.Item>
          <br />
          <Form.Item>
            <Input
              type="number"
              className="input"
              placeholder="Pages"
              name="pages"
              value={this.state.pages}
              onChange={this.handleChangeInput}
            />
          </Form.Item>
          <input type="submit" value="submit" />
        </Form>
      </div>
    );
  }
}

export default BookForm;
