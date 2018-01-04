// @flow
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Job from "./Job";

import "./Utilities.css";

import jobData from "./jobs.json";

const titleRowStyle = {
  paddingTop: "125px",
  paddingBottom: "125px"
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
  paddingBottom: "40px"
};

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <Row className="background-primary" style={titleRowStyle}>
          <Col xs="0" sm="2" />
          <Col xs="12" sm="8" className="text-center">
            <Row className="w-100">
              <p className="fs-20 w-100">We're hiring the cream of the crop.</p>
              <p className="fs-16 w-100 text-opacity-80">
                See our positions below.
              </p>
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
              <Col xs="0" sm="2" />
              <Col xs="12" sm="8">
                <p
                  className="background-lightgray fs-20 text-black border-gray"
                  style={emailTextStyle}
                >
                  jobs@faithcleaningservice.com
                </p>
              </Col>
              <Col xs="0" sm="2" />
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
