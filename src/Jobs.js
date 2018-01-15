// @flow
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Job from "./Job";

import "./Utilities.css";

import jobData from "./jobs.json";

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
  paddingTop: "20px",
  paddingBottom: "20px"
};

export default class Jobs extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="background-primary py-5 px-3" id="title-row">
          <Col xs="0" sm="2" />
          <Col xs="12" sm="8" className="text-center pt-5">
            <Row>
              <p className="fs-24 w-100">We're hiring the cream of the crop.</p>
            </Row>
          </Col>
          <Col xs="0" sm="2" />
        </Row>
        <Row className="background-white" style={emailRowStyle}>
          <Col className="text-center">
            <p className="fs-16 w-100 text-gray">
              Don't see your role? Send us a resume anyway!
            </p>
            <p />
            <Row>
              <Col xs="0" sm="2" md="3" />
              <Col xs="12" sm="8" md="6">
                <p
                  className="background-lightgray fs-20 text-black border-gray d-none d-sm-block"
                  style={emailTextStyle}
                >
                  jobs@faithcleaningservice.com
                </p>
                <p
                  className="background-lightgray fs-16 text-black border-gray d-block d-sm-none w-100 py-2"
                >
                  jobs@faithcleaningservice.com
                </p>
              </Col>
              <Col xs="0" sm="2" md="3" />
            </Row>
          </Col>
        </Row>
        <Row className="background-lightgray" style={jobsRowStyle}>
          {jobData.jobs.map((job, idx) => <Job job={job} key={idx} />)}
        </Row>
      </Container>
    );
  }
}
