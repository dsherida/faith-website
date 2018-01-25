// @flow
import React, { Component } from "react";

import "./Utilities.css";
import { ColorPrimary, ColorSecondary } from "./Colors";

const footer = {
  background:
    "linear-gradient(to left, " + ColorPrimary + "," + ColorSecondary + ")",
  padding: "5px",
  zIndex: 2
};

export default class Footer extends Component {
  render() {
    if (window.location.hash !== "#/") {
      return (
        <div
          style={{
            ...footer,
            background:
              window.location.hash === "#/"
                ? "rgba(0, 0, 0, 0.0)"
                : "linear-gradient(to left, " +
                  ColorPrimary +
                  "," +
                  ColorSecondary +
                  ")"
          }}
          className="text-center fs-12"
        >
          <div>©2018 Faith, LLC.</div>
          <div>(888) 845-2855</div>
          <div className="fs-10 text-center m-2" style={{ opacity: 0.75 }}>
            Phoenix | Las Vegas | Los Angeles | San Francisco | San Diego |
            Seattle | Huston | Dallas | Austin | Atlanta | Manhattan |
            Philadelphia | New Jersey | Boston | Washington | Chicago | Miami |
            Fort Lauderdale | Tampa Bay | Virgin Islands | London | Paris |
            Spain | Dubai
          </div>
        </div>
      );
    } else {
      return <span />;
    }
  }
}
