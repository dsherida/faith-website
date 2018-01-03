// @flow
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Utilities.css";

import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const faithLogo = {
  maxWidth: "250px"
};

const emailRowStyle = {
  padding: "40px"
};

const emailTextStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "40px",
  paddingRight: "40px"
};

const jobsRowStyle = {
  paddingTop: "40px",
  paddingLeft: "40px",
  paddingRight: "40px"
};

const lastJobRowStyle = {
  padding: "40px"
};

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="my-5">
            <Col />
            <Col className="text-center">
              <div>
                <img
                  style={faithLogo}
                  className="img-fluid mb-3"
                  src={Logo}
                  alt="Faith Logo"
                />
              </div>
              <Row>
                <span className="fs-20">
                  We're looking to hire the cream of the crop.
                </span>
                <p className="fs-16 w-100">See all our positions below.</p>
              </Row>
            </Col>
            <Col />
          </Row>
        </Container>
        <Row className="background-white" style={emailRowStyle}>
          <Col className="text-center">
            <p className="fs-16 w-100 text-gray">
              Don't see your role? Send us a resume anyway!
            </p>
            <p />
            <Row>
              <Col className="col-sm-3" />
              <Col className="col-sm-6">
                <p
                  className="background-lightgray fs-20 w-100 text-black border-gray"
                  style={emailTextStyle}
                >
                  jobs@harrisglobalsolutions.com
                </p>
              </Col>
              <Col className="col-sm-3" />
            </Row>
          </Col>
        </Row>
        <Row className="background-lightgray" style={jobsRowStyle}>
          <Col className="col-sm-2" />
          <Col className="col-sm-8 mt-2 text-black">
            <p className="fs-20">Senior Full Stack Developer</p>
            <p className="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ante dolor, malesuada ac semper hendrerit, ultrices at est. Sed
              efficitur lorem nec dolor suscipit, at viverra neque feugiat.
              Donec vitae commodo quam. Duis tincidunt turpis eu ipsum maximus,
              eget ornare sem sagittis. Phasellus venenatis consectetur ex id
              aliquet. Aliquam erat volutpat. Mauris fermentum vestibulum
              rhoncus. Praesent vel lorem quis magna ornare egestas sed eu ante.
            </p>
            <Link
              className="text-color-primary"
              to="/senior-full-stack-developer"
            >
              See more
            </Link>
          </Col>
          <Col className="col-sm-2" />
        </Row>
        <Row className="background-lightgray" style={jobsRowStyle}>
          <Col className="col-sm-2" />
          <Col className="col-sm-8 mt-2 text-black">
            <p className="fs-20">Senior Full Stack Developer</p>
            <p className="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ante dolor, malesuada ac semper hendrerit, ultrices at est. Sed
              efficitur lorem nec dolor suscipit, at viverra neque feugiat.
              Donec vitae commodo quam. Duis tincidunt turpis eu ipsum maximus,
              eget ornare sem sagittis. Phasellus venenatis consectetur ex id
              aliquet. Aliquam erat volutpat. Mauris fermentum vestibulum
              rhoncus. Praesent vel lorem quis magna ornare egestas sed eu ante.
            </p>
            <Link
              className="text-color-primary"
              to="/senior-full-stack-developer"
            >
              See more
            </Link>
          </Col>
          <Col className="col-sm-2" />
        </Row>
        <Row className="background-lightgray" style={lastJobRowStyle}>
          <Col className="col-sm-2" />
          <Col className="col-sm-8 mt-2 text-black">
            <p className="fs-20">Senior Full Stack Developer</p>
            <p className="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ante dolor, malesuada ac semper hendrerit, ultrices at est. Sed
              efficitur lorem nec dolor suscipit, at viverra neque feugiat.
              Donec vitae commodo quam. Duis tincidunt turpis eu ipsum maximus,
              eget ornare sem sagittis. Phasellus venenatis consectetur ex id
              aliquet. Aliquam erat volutpat. Mauris fermentum vestibulum
              rhoncus. Praesent vel lorem quis magna ornare egestas sed eu ante.
            </p>
            <Link
              className="text-color-primary"
              to="/senior-full-stack-developer"
            >
              See more
            </Link>
          </Col>
          <Col className="col-sm-2" />
        </Row>
      </div>
    );
  }
}
