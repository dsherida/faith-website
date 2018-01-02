// @flow
import React, { Component } from "react";
import { Navbar, Grid } from "react-bootstrap";

export default class Head extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Faith</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
      </div>
    );
  }
}
