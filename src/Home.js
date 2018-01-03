import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"
import Logo from './assets/logo.png'
import "./App.css";
import "./Utilities.css"


const faithLogo = {
  maxWidth: '250px'
}


export default class Home extends Component {
  render() {
    return (
      <div className="h-100">
        <Container>
          <Row className="my-5">
            <Col xs="12" lg="4"></Col>
            <Col xs="12" lg="4" className="text-center">
              <div>
                <img style={faithLogo} className="img-fluid mb-3" src={Logo} alt="Faith Logo" />
              </div>
              <span className="font-italic fs-28">Never overpay for cleaning</span>
            </Col>
            <Col xs="12" lg="4" className="text-center d-flex align-items-center mt-5">
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
      </div>
    );
  }
}
