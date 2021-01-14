import React, { Component } from "react";
import { Form, Input, Button, Modal } from "semantic-ui-react";

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
    console.log(this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(e.target);

    this.setState({
      title: "",
      author: "",
      pages: 0,
      readStatus: false,
      open: false
    });

  };

  handleClick = () => {
    this.setState((prevState) => ({ readStatus: !prevState.readStatus}))
  }

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
                <Button
                  onClick={this.handleClick}
                  toggle
                  active={this.state.readStatus}
                >
                  Read
                </Button>
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
