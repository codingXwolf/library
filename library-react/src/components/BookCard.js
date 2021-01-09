import React, { Component } from 'react';
import { Card, Switch } from 'antd';

class BookCard extends Component {



// isRead = (status) => {
//   console.log(this.props)
// }


    render() {

        
        return (
          <div>
            <Card
              key={this.props.data.id}
              title={this.props.data.title}
              extra={
                <button
                  onClick={this.props.delBook.bind(this, this.props.data)}
                >
                  Delete
                </button>
              }
              style={{ width: 300 }}
              size="small"
              hoverable="true"
            >
              <p>{this.props.data.author}</p>
              <p>{this.props.data.pages}</p>
              <Switch
                checked={this.props.data.readStatus}
                onClick={this.props.readStatusHandler.bind(this.props.data)}
                checkedChildren="Read"
                unCheckedChildren="Unread"
              ></Switch>
            </Card>
          </div>
        );
    }
}

export default BookCard;
