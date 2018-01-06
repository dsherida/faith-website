// @flow
import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faEnvelope } from '@fortawesome/fontawesome-free-solid'

import "./Navbar.css";
import "./Utilities.css"

const emailSectionStyle = {
  paddingTop: "150px",
  paddingBottom: "150px",
  position: "absolute",
  top: "100%"
};

const inputLabelStyle = {
  color: "black"
}

const envelopeStyle = {
  fontSize: "100px"
}



export default class Header extends Component {

  submitEmail() {
    console.log('submiting email')
  }

  render() {
    return (
      <Container style={emailSectionStyle} fluid className="background-lightgray z-index-2 px-4 text-gray">
        <Row>
          <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} className="d-flex">
            <Row className="w-100">
              <Col xs="12" xl="3">
                <div className="align-self-center mx-4 text-center">
                  <FontAwesomeIcon icon={faEnvelope} style={envelopeStyle}/>
                </div>
              </Col>
              <Col xs="12" xl="9">
                <div className="align-self-center w-100">
                  <label style={inputLabelStyle} htmlFor="email-address-input">Become a partner</label>
                  <div className="input-group mb-3">
                    <input type="text"
                          className="form-control"
                          id="email-address-input"
                          placeholder="Enter email address..." />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" onClick={() => this.submitEmail()}>
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
