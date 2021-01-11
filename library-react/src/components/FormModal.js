import React from "react";
import BookForm from './BookForm';
import { Button, Modal } from "semantic-ui-react";
// import BookCard from "./BookCard";

function FormModal(props) {
  const [open, setOpen] = React.useState(false);

console.log(props)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Content>
        <BookForm  addBook={props.addBook}/>
      </Modal.Content>

      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Exit
        </Button>

        <Button

          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default FormModal;


