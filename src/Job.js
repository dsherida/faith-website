import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import "./Utilities.css";

const buttonStyle = {
  paddingLeft: "0px",
  paddingTop: "10px",
  paddingBottom: "40px"
};

const paddingTopStyle10px = {
  paddingTop: "20px"
};

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: props.job,
      seeMoreClicked: false
    };
  }

  render() {
    const seeMoreButtonOnClick = () => {
      this.setState({
        seeMoreClicked: !this.state.seeMoreClicked
      });
    };

    return (
      <Row className="background-lightgray">
        <Col xs="2" sm="3" />
        <Col xs="8" sm="6" className="mt-2 text-black">
          <div className="fs-20">{this.state.job.name}</div>
          <div className="fs-16 text-gray">
            {this.state.job.location}, {this.state.job.salary}
          </div>
          <p className="fs-16" style={paddingTopStyle10px}>
            {this.state.job.description}
          </p>
          {!this.state.seeMoreClicked ? (
            <Button
              color="link"
              className="text-color-primary"
              onClick={seeMoreButtonOnClick}
              style={buttonStyle}
            >
              See more
            </Button>
          ) : (
            <div>
              <p className="fs-18">Skills and Requirements</p>
              {this.state.job.skills.map(skill => (
                <li>
                  <i class="fa-li fa fa-square" /> {skill}
                </li>
              ))}
              <p style={paddingTopStyle10px}>
                Apply now by sending your resume and cover letter to&nbsp;
                <a href="mailto:jobs@faithcleaningservice.com" target="_top">Faith Talent Acquisition.</a>
              </p>
              <Button
                color="link"
                className="text-gray"
                onClick={seeMoreButtonOnClick}
                style={buttonStyle}
              >
                See less...
              </Button>
            </div>
          )}
        </Col>
        <Col xs="2" sm="3" />
      </Row>
    );
  }
}
