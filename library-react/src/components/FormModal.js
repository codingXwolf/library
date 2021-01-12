import React, { Component } from "react";
import BookForm from './BookForm';
import { Button, Modal } from "semantic-ui-react";
// import BookCard from "./BookCard";

class FormModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
    
    
    console.log(this.props)
  }
  
  setOpen = (bool) => {
    this.setState({open: bool})
  } 

  render() {
    return (
      <Modal
        style={{ textAlign: "center" }}
        size="mini"
        onClose={() => this.setOpen(false)}
        onOpen={() => this.setOpen(true)}
        open={this.open}
        trigger={<Button>Add Book</Button>}
      >
        <Modal.Content>
          <BookForm addBook={this.props.addBook} />
        </Modal.Content>

        <Modal.Actions style={{ textAlign: "center" }}>
          <Button color="black" onClick={() => this.setOpen(false)}>
            Exit
          </Button>

          <Button
            content="Submit"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.state.setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FormModal;


