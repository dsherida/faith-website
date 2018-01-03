// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop className="p-3">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink>
                <Link to="/">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/jobs">Jobs</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
