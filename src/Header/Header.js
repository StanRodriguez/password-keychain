import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1 className="title">KeyChain</h1>
      </Link>
      {props.isSignedIn ? (
        <div className="button" onClick={props.handleSignOut}>
          Sign Out
        </div>
      ) : null}
    </div>
  );
};

export default Header;
