// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { ColorPrimary, ColorSecondary } from "./Colors";

const underlineStyle = {
  backgroundColor: "white",
  height: "2px",
  width: "100%"
};

const NavbarStyle = {
  zIndex: 2,
  position: "absolute",
  top: 0,
  right: 0
};

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          background:
            window.location.hash === "#/" ? "rgba(0, 0, 0, 0.0)" : "linear-gradient(to left, " + ColorPrimary + "," + ColorSecondary + ")"
        }}
      >
        <Navbar className="p-3" id="nav-bar" style={NavbarStyle}>
          <Nav className="ml-auto">
            <Link to="/">
              <NavItem>
                <span className="nav-link">ABOUT</span>
                {window.location.hash === "#/" ? (
                  <div style={underlineStyle} />
                ) : null}
              </NavItem>
            </Link>
            <Link to="/jobs">
              <NavItem>
                <span className="nav-link">JOBS</span>
                {window.location.hash === "#/jobs" ? (
                  <div style={underlineStyle} />
                ) : null}
              </NavItem>
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
