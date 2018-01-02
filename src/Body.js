// @flow
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Faith</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                Obligatory button
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
