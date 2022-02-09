import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: '',
      isclick: false,
    };
  }
  handleChange=(event) =>{
    this.setState({ value: event.target.value });
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    console.log('log')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default NameForm;
