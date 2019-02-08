import React, { Component } from "react";
import Axios from "axios";
import "./SignUp.css";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        repeat_password: "",
        email: ""
      },
      doesUsernameExist: false,
      isUserCreated: false,
      password_match: true
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { password, repeat_password, username } = this.state.user;
    console.log(password, repeat_password);

    if (password === repeat_password) {
      const response = await Axios.post(
        "http://localhost:4567/users",
        this.state.user
      );
      console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);

        console.log(sessionStorage.getItem("username"));
        this.props.setUsername(username, password);
        this.setState({
          isUserCreated: true
        });
      }
    }
  };
  handleUsernameExistance = async e => {
    const { value } = e.target;
    if (value !== "") {
      const response = await Axios.get(
        "http://localhost:4567/user_existance/" + value
      );
      this.setState({
        doesUsernameExist: response.data
      });
    }
  };
  handlePasswordMatch = e => {
    const { name, value } = e.target;
    const { password, repeat_password } = this.state.user;
    const password_match = password === repeat_password;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        },
        password_match
      };
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  };
  render() {
    if (this.state.isUserCreated) return <Redirect to="/" />;
    return (
      <form onSubmit={this.handleSubmit} className="signup-form">
        <h1>Sign Up Here</h1>
        <div className="form-group">
          <label>
            <input
              placeholder="First name"
              onChange={this.handleChange}
              className="form-control"
              type="Text"
              name="first_name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              placeholder="Last name"
              onChange={this.handleChange}
              className="form-control"
              type="Text"
              name="last_name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              placeholder="Email"
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              placeholder="Username"
              onChange={this.handleChange}
              onBlur={this.handleUsernameExistance}
              className={
                this.state.doesUsernameExist
                  ? "form-control wrong"
                  : "form-control "
              }
              type="Text"
              name="username"
              required
            />
            {this.state.doesUsernameExist ? (
              <small className="text-danger">
                This username already exist.
              </small>
            ) : (
              ""
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              placeholder="Password"
              className={
                this.state.password_match
                  ? "form-control"
                  : "form-control wrong"
              }
              onChange={this.handleChange}
              onKeyUp={this.handlePasswordMatch}
              required
              type="password"
              name="password"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              placeholder="Repeat password"
              className={
                this.state.password_match
                  ? "form-control"
                  : "form-control wrong"
              }
              onChange={this.handleChange}
              onKeyUp={this.handlePasswordMatch}
              type="password"
              required
              name="repeat_password"
            />
          </label>
          <div className="form-group">
            {this.state.password_match ? (
              ""
            ) : (
              <small className="text-danger">Passwords don't match</small>
            )}
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit ">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignUp;
