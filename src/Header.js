// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./Navbar.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop className="p-3">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="" className="text-white nav-link">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs" className="text-white nav-link">Jobs</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
