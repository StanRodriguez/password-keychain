import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn.js";
import SignUp from "../SignUp/SignUp.js";
import Home from "../Home/Home.js";
import Header from "../Header/Header.js";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userLoginInfo: [],
      isSignedIn: false,
      didSignInFail: false
    };
  }

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount = async () => {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");

    if (username && password) {
      this.getUserInfo(username, password);
    }
  };
  setUsername = (username, password) => {
    this.setState({
      username,
      password
    });
    this.getUserInfo();
  };
  getUserInfo = async (username, password) => {
    if (!username || !password) {
      username = this.state.username;
      password = this.state.password;
    }
    const response = await axios.post("http://localhost:4567/login", {
      username,
      password
    });
    if (response.data.services) {
      this.setState({
        isSignedIn: true,
        userLoginInfo: response.data
      });
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
    } else {
      this.setState({
        didSignInFail: true
      });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); // Let's stop this event.
    // event.stopPropagation();
    this.getUserInfo();
  };

  handleSignOut = () => {
    this.setState({
      isSignedIn: false,
      username: "",
      password: ""
    });
    sessionStorage.clear();
  };

  render() {
    return (
      <div className="App">
        <Header
          isSignedIn={this.state.isSignedIn}
          handleSignOut={this.handleSignOut}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SignIn
                handleFormChange={this.handleFormChange}
                handleFormSubmit={this.handleFormSubmit}
                username={this.state.username}
                password={this.state.password}
                isSignedIn={this.state.isSignedIn}
                didSignInFail={this.state.didSignInFail}
              />
            )}
          />
          <Route
            path="/signup"
            render={() => <SignUp setUsername={this.setUsername} />}
          />
          <Route
            path="/home"
            render={() => (
              <Home
                userLoginInfo={this.state.userLoginInfo}
                isSignedIn={this.state.isSignedIn}
                refresh={this.getUserInfo}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
