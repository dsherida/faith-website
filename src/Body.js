// @flow
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"
import Logo from './assets/logo.png'
import "./App.css";
import "./Utilities.css"

const faithLogo = {
  maxWidth: '250px'
}

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
          <Col xs="12" md="4"></Col>
          <Col xs="12" md="4" className="text-center">
            <div>
              <img style={faithLogo} className="img-fluid mb-3" src={Logo} alt="Faith Logo" />
            </div>
            <span className="font-italic fs-28">Never overpay for cleaning</span>
          </Col>
          <Col xs="12" md="4" className="text-center d-flex align-items-center mt-5">
            <div className="w-100">Summer 2018</div>
            <div className="w-100">
              <span className="d-block">Android</span>
              <span className="d-block">Apple</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <span className="fs-18">
              Faith is a mobile application that will revolutionize the cleaning industry like no other app has done before.

            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}
