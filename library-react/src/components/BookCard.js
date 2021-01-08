import React, { Component } from 'react';
import { Card } from 'antd';

class BookCard extends Component {
    render() {
        console.log(this.props);
        return (
          <div>
            <Card
              key={this.props.data.id}
              title={this.props.data.title}
              extra={<button onClick={this.props.delBook}>Delete</button>}
              style={{ width: 300 }}
              size="small"
              hoverable="true"
            >
              <p>{this.props.data.author}</p>
              <p>{this.props.data.pages}</p>
            </Card>
          </div>
        );
    }
}

export default BookCard;
