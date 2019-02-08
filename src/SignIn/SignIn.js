import React from "react";
import { Link, Redirect } from "react-router-dom";
import mainLogo from "./image-assets/keychain-logo.png"
import "./SignIn.css";

const SignIn = props => {
  if (props.isSignedIn === true) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="signin-container">
      <div className="main-logo">
        <img className="logo-image" src={mainLogo} />
      </div>
      <form onSubmit={props.handleFormSubmit}>
        <div className="form-group user-signin-form">
          <input
            className="form-control edit-input"
            type="text"
            name="username"
            placeholder="username"
            value={props.username}
            onChange={props.handleFormChange}
          />
        </div>
        <div className="form-group user-signin-form">
          <input
            className="form-control edit-input"
            type="password"
            name="password"
            placeholder="password"
            value={props.password}
            onChange={props.handleFormChange}
          />
          <input className="user-signin-button" type="submit" value="sign in" />
        </div>
      </form>

      {props.didSignInFail ? (
        <p>We can't find that username or password, please try again!</p>
      ) : null}
      <h4>Not a member yet?</h4>
      <p>
        <Link to={`/signup`}>Click here</Link> to sign up!
      </p>
    </div>
  );
};

export default SignIn;
