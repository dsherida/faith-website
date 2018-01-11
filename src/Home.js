import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Logo from "./assets/logo.png";
import AppBadges from "./assets/app-badges.png";

import "./App.css";
import "./Utilities.css";

import BackgroundImage from "./assets/bg.png";

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
}

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
      <div style={mainDivStyle} >
        <div className="overlay" />
        <Container>
          <Row className="my-5">
            <Col xs="2" lg="4" />
            <Col xs="8" lg="4" className="text-center">
              <div>
                <img
                  className="img-fluid mb-3"
                  src={Logo}
                  alt="Faith Logo"
                />
              </div>
            </Col>
            <Col
              xs="12"
              lg="4"
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
              <div className="fs-28" style={textShadowStyle}>
                Never overpay for cleaning
              </div>
              <div className="fs-20" style={textShadowStyle}>
                Faith is revolutionizing the cleaning industry like no app has
                done before.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
