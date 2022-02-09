import React from "react";
import About from "./About";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoggedIn: true,
    });
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <About email={this.state.emailOrUsername} pass={this.state.password} />
      );
    }
    return (
      <>
      <h1>Parent Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email or username
            <input
              name="emailOrUsername"
              type="text"
              value={this.state.emailOrUsername}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default LoginForm;
