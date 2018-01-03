// @flow
import React, { Component, Image } from "react";
import { Container, Row, Col } from "reactstrap"
import "./App.css";
import "./Utilities.css"

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
      <Container>
        <Row className="my-5">
          <Col className="text-center">
            Never overpay for cleaning
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <span className="fs-14">Faith is a mobile application that will revolutionize the cleaning industry like no other app has done before.</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
