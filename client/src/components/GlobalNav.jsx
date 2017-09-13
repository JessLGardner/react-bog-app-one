import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgba(2, 178, 208, 1);
  box-shadow: 0px 1px 6px black;
  a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
      color: white;
    }
  }
`;

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <div>
            <Link to="/"><h1>creatures! </h1></Link>
          </div>

          <a href="/new">make a new creature</a>

          <div>
            <span>signed in as: {this.state.user.email} </span> |
            <a href="#" onClick={this._logOut}> log out</a>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
          <h1>creatures!</h1>
        </Link>
        <div>
          <Link to="/signup">sign up </Link> |
          <Link to="/signin"> log in</Link>
        </div>
      </Nav>
    );
  }
}

export default GlobalNav;