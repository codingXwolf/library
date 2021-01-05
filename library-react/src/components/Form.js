import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '',
      author: '',
      pages: '',
      readStatus: false
    }

  }
  
  render() {
    return (
      <div>
        <form>
          <input />
        </form>
      </div>
    );
  }
}

export default Form;
