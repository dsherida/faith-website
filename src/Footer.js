// @flow
import React, { Component } from "react";

import "./Utilities.css";
import { ColorPrimary } from "./Colors";

const footer = {
  background: ColorPrimary,
  padding: "20px"
};

const phantom = {
  height: "auto"
};

export default class Footer extends Component {
  render() {
    return (
      <div style={footer} className="text-center fs-14">
        <span className="text-opacity-50" style={phantom}>
          Harris Global Solutions, LLC. © 2018{" "}
        </span>
      </div>
    );
  }
}
