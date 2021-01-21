import React, { Component } from "react";
import { Card, Button, Icon, Label } from "semantic-ui-react";

class BookCard extends Component {
  render() {
    const readStatusButton = () => {
      // readStatus is being converted into a string. Find a way to prevent it from turning into a string or convert it to boolean.
      if (this.props.data.readStatus) {
        return (
          <Label pointing basic small="true" color="green">
            Read
          </Label>
        );
      } else {
        return (
          <Label pointing basic small="true" color="grey">
            Unread
          </Label>
        );
      }
    };

    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Button
              icon
              floated="right"
              onClick={this.props.delBook.bind(this, this.props.data)}
            >
              <Icon name="trash alternate" />
            </Button>

            <Button
              icon
              floated="right"
              onClick={this.props.editBook.bind(this, this.props.data)}
            >
              <Icon name="edit" />
            </Button>

            <Card.Header>{this.props.data.title}</Card.Header>

            <Card.Meta>{this.props.data.author}</Card.Meta>

            <Card.Description>
              <strong>Pages: {this.props.data.pages}</strong> <br />
              {readStatusButton()}
            </Card.Description>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default BookCard;
