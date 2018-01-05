// @flow
import React, { Component } from "react";

import "./Utilities.css";
import { ColorPrimary } from "./Colors";

const footer = {
  background: "transparent",
  padding: "20px",
  zIndex: 2
};

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          ...footer,
          backgroundColor:
            window.location.hash === "#/" ? "rgba(0, 0, 0, 0.0)" : ColorPrimary
        }}
        className="text-center fs-14"
      >
        <div>©2018 Faith, LLC.</div>
        <div>Tempe, AZ</div>
      </div>
    );
  }
}
