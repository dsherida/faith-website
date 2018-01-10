import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Logo from "./assets/logo.png";
import AppBadges from "./assets/app-badges.png";

import "./App.css";
import "./Utilities.css";

const appBadgeStyle = {
  height: "150px",
  width: null,
  display: "block",
  margin: "auto"
};

const textShadowStyle = {
  textShadow: "0px 0px 12px rgba(0, 0, 0, 0.66)"
};

export default class Home extends Component {
  render() {
    return (
      <div
        className="h-100"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="overlay" />
        <Container>
          <Row className="my-5">
            <Col xs="2" lg="3" />
            <Col xs="8" lg="6" className="text-center">
              <div>
                <img
                  className="img-fluid mb-3"
                  src={Logo}
                  alt="Faith Logo"
                />
              </div>
              <span className="fs-28" style={textShadowStyle}>
                Never overpay for cleaning
              </span>
            </Col>
            <Col
              xs="12"
              lg="3"
              className="text-center d-flex align-items-center justify-content-center mt-5"
            >
              <Row>
                <Col xs="12">
                  <div className="w-100 fw-900 mb-3" style={textShadowStyle}>
                    SUMMER 2018
                  </div>
                </Col>
                <Col xs="12">
                  <img src={AppBadges} alt="" style={appBadgeStyle} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-2">
              <span className="fs-20" style={textShadowStyle}>
                Faith is revolutionizing the cleaning industry like no app has
                done before.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
