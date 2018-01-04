// @flow
import React, { Component } from "react";

import "./Utilities.css";
import { ColorPrimary } from "./Colors";

const footer = {
  background: ColorPrimary,
  padding: "20px"
};

export default class Footer extends Component {
  render() {
    return (
      <div style={footer} className="text-center fs-14 text-opacity-50">
        <div>
          Faith, LLC. ©2018{" "}
        </div>
        <div>
          Tempe, AZ
        </div>
      </div>
    );
  }
}
