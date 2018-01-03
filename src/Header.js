// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const navbarStyle = {
  background: "#FFF",
  borderWidth: 0,
  padding: 10
};

const navbarMainTextStyle = {
  color: "#000"
};

const divStyle = {
  height: 1,
  background: "#58402c"
};

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop style={navbarStyle}>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="" className="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs">Jobs</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div style={divStyle} />
      </div>
    );
  }
}
