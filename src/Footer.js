// @flow
import React, { Component } from "react";

import "./Utilities.css";
import { ColorPrimary, ColorSecondary } from "./Colors";

const footer = {
  background: "linear-gradient(to left, " + ColorPrimary + "," + ColorSecondary + ")",
  padding: "10px",
  zIndex: 2,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0
};

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          ...footer,
          background:
            window.location.hash === "#/" ? "rgba(0, 0, 0, 0.0)" : "linear-gradient(to left, " + ColorPrimary + "," + ColorSecondary + ")"
        }}
        className="text-center fs-12"
      >
        <div>©2018 Faith, LLC.</div>
        <div>Tempe, AZ</div>
      </div>
    );
  }
}
