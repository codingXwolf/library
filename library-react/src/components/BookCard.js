import React, { Component } from 'react';
import { Card, Button, Icon, Label } from 'semantic-ui-react';

class BookCard extends Component {



    render() {

      const readStatusButton = () => {
        console.log(typeof this.props.data.readStatus);
        debugger;
        // readStatus is being converted into a string. Find a way to prevent it from turning into a string or convert it to boolean.
        if(this.props.data.readStatus) {
          return <Label pointing  basic small color="green" size="small">Read</Label>
        } else {
          return <Label pointing basic small color="grey" size="small">Unread</Label>
        }
      }
        
        return (
          <div>
            <Card>
              <Card.Content>
                <Button
                  icon
                  floated="right"
                  onClick={this.props.delBook.bind(this, this.props.data)}
                >
                  <Icon name="trash alternate" />
                </Button>

                <Card.Header style={{ overflow: "hidden" }}>
                  {this.props.data.title}
                </Card.Header>

                <Card.Meta>{this.props.data.author}</Card.Meta>

                <Card.Description>
                  <strong>Pages: {this.props.data.pages}</strong> <br/>
                  {readStatusButton()}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        );
    }
}

export default BookCard;
