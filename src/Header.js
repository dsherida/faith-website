// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { ColorPrimary } from "./Colors";

const underlineStyle = {
  backgroundColor: "white",
  height: "2px",
  width: "100%"
};

const NavbarStyle = {
  zIndex: 2
};

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor:
            window.location.hash === "#/" ? "rgba(0, 0, 0, 0.0)" : ColorPrimary
        }}
      >
        <Navbar className="p-3" id="nav-bar" style={NavbarStyle}>
          <Nav className="ml-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                ABOUT
              </Link>
              {window.location.hash === "#/" ? (
                <div style={underlineStyle} />
              ) : null}
            </NavItem>
            <NavItem>
              <Link to="/jobs" className="nav-link">
                JOBS
              </Link>
              {window.location.hash === "#/jobs" ? (
                <div style={underlineStyle} />
              ) : null}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
