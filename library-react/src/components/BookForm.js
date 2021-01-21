import React, { Component } from "react";
import { Form, Input, Button, Modal, Checkbox } from "semantic-ui-react";

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      pages: 0,
      readStatus: false,
      open: false,
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReadStatus = (e) => {
    this.setState({readStatus: !this.state.readStatus})
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(e.target.title.value === '' || e.target.author.value === '' || e.target.pages.value === 0) {
      return alert('Error Message')
    }

    this.props.addBook(e.target);

    this.setState({
      title: "",
      author: "",
      pages: 0,
      readStatus: false,
      open: false
    });

  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Modal
          style={{ textAlign: "center" }}
          size="mini"
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
          trigger={<Button primary>New Book</Button>}
        >
          <Modal.Content>
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
                <Checkbox
                  value={this.state.readStatus}
                  onChange={this.handleReadStatus}
                  checked={this.state.readStatus}
                  name="readStatus"
                  toggle
                  label={this.state.readStatus ? "Read" : "Unread"}
                ></Checkbox>
              </Form.Field>

              <Modal.Actions>
                <Form.Field>
                  <Button style={{ margin: "0 10px" }} positive>
                    Add
                  </Button>
                </Form.Field>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default BookForm;
