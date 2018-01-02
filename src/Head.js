// @flow
import React, { Component } from "react";
import { Navbar, Grid } from "react-bootstrap";

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

export default class Head extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop style={navbarStyle}>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/" style={navbarMainTextStyle}>
                  Faith
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
          <div style={divStyle} />
        </Navbar>
      </div>
    );
  }
}
