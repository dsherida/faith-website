import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Logo from "./assets/logo.png";
import AppBadges from "./assets/app-badges.png";

import "./App.css";
import "./Utilities.css";

import BackgroundImage from "./assets/bg.jpg";

const mainDivStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover"
};

const textShadowStyle = {
  textShadow: "0px 0px 12px rgba(0, 0, 0, 0.66)"
};

export default class Home extends Component {
  render() {
    return (
      <div style={mainDivStyle}>
        <div className="overlay" />
        <Container>
          <Row className="my-md-5">
            <Col xs="2" md="3" lg="4" />
            <Col xs="8" md="6" lg="4" className="text-center">
              <div>
                <img className="img-fluid mb-3" src={Logo} alt="Faith Logo" />
              </div>
            </Col>
            <Col
              xs="12"
              lg="4"
              className="text-center d-flex align-items-center justify-content-center mt-md-5"
            >
              <Row>
                <Col xs="12">
                  <div className="w-100 fw-800 mb-3" style={textShadowStyle}>
                    THIS SUMMER
                  </div>
                </Col>
                <Col xs="3" />
                <Col xs="6">
                  <img src={AppBadges} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-2 pb-3">
              <div className="fs-24" style={textShadowStyle}>
                Never overpay for house cleaning.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
