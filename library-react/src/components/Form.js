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
          <input 
          type='text'
          className='input'
          placeholder='Enter Title'
          value={this.state.title}
          onChange={(e) => this.setState({title: e.target.value})}
          />
        </form>
      </div>
    );
  }
}

export default Form;
