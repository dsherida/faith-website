// @flow
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import {
  Jumbotron,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Form,
  Col,
  Image
} from "react-bootstrap";
import "./App.css";

const BgImage = require("./clean-house.jpeg");

const jumbotronStyle = {
  background: "#FFF0"
};

const fullscreenBackground = {
  flex: 1,
  position: "relative",
  width: "100%",
  height: null,
  resizeMode: "cover"
};

const boldStyle = {
  fontWeight: "bold"
};

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onEmailSubmit = e => {
    console.log(this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Jumbotron style={jumbotronStyle}>
          <Image src={BgImage} style={fullscreenBackground} />
          <Grid>
            <h2 style={boldStyle}>Automate your cleaning</h2>
            <Form horizontal onSubmit={this.onEmailSubmit}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <Col sm={5}>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Email address..."
                    onChange={this.handleChange}
                  />
                </Col>
                <Col sm={3}>
                  <Button
                    type="submit"
                    bsStyle="success"
                    href="#"
                    onClick={this.onEmailSubmit}
                  >
                    Sign up for updates
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
