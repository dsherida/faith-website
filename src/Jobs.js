// @flow
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Job from "./Job";

import "./Utilities.css";

import Logo from "./assets/logo.png";
import jobData from "./jobs.json";

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
  paddingBottom: "40px",
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
                  jobs@faithcleaningservice.com
                </p>
              </Col>
              <Col className="col-sm-3" />
            </Row>
          </Col>
        </Row>
        <Row>
          <div className="background-lightgray" style={jobsRowStyle}>
            {jobData.jobs.map((job, idx) => <Job job={job} key={idx} />)}
          </div>
        </Row>
      </div>
    );
  }
}
