import React, { Component } from 'react';
import { Card } from 'antd';

class BookCard extends Component {
    render() {
        console.log(this.props);
        return (
          <div>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        );
    }
}

export default BookCard;
