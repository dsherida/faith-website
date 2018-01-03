// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

const underlineStyle = {
  backgroundColor: "white",
  height: "2px",
  width: "100%"
};

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop className="p-3">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink>
                <Link to="/" className="nav-link">
                  About
                </Link>
                {window.location.hash === "#/" ? (
                  <div style={underlineStyle} />
                ) : null}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/jobs" className="nav-link">
                  Jobs
                </Link>
                {window.location.hash === "#/jobs" ? (
                  <div style={underlineStyle} />
                ) : null}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
