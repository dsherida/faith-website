import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"

import Logo from './assets/logo.png'
import AppBadges from './assets/app-badges.png'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import "./App.css";
import "./Utilities.css"

fontawesome.library.add(brands)


const faithLogo = {
  maxWidth: '250px'
}

const appBadgeStyle = {
  height: "100px",
  width: null,
  display: "block",
  margin: "auto"
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
            <Col xs="12" lg="4" className="text-center d-flex align-items-center justify-content-center mt-5">
              <Row>
                <Col xs="12">
                  <div className="w-100 fw-900 mb-3">Summer 2018</div>
                </Col>
                <Col xs="12">
                  <div className="d-flex justify-content-between mx-5 px-4">
                      <img src={AppBadges} alt="" style={appBadgeStyle} />
                      {/* <span><FontAwesomeIcon icon={["fab", "android"]} className="text-android-green" size="2x" />Google Play Store </span>
                      <span><FontAwesomeIcon icon={["fab", "apple"]} className="text-apple-black" size="2x"/>Apple App Store </span> */}
                  </div>
                </Col>
              </Row>
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
