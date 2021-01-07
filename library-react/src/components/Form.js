import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '',
      author: '',
      pages: 0,
      readStatus: false
    }

  }

 handleChangeInput= (e) => {
 
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(this.state);
}

onSubmit = (e) => {
 e.preventDefault();

this.props.addBook(e.target);
this.setState({
  title: "",
  author: "",
  pages: 0,
  readStatus: false,
});

}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
          /> <br/>
          <input
            type="text"
            className="input"
            placeholder="Author"
            name="author"
            value={this.state.author}
            onChange={this.handleChangeInput}
          /> <br/>
          <input
            type="number"
            className="input"
            placeholder="Pages"
            name="pages"
            value={this.state.pages}
            onChange={this.handleChangeInput}
          />
        <input
         type="submit"
         value="submit"
        />
        </form>
      </div>
    );
  }
}

export default Form;
