import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Admin Buildings </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/create'>Add building</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/index'>View buildings</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;

