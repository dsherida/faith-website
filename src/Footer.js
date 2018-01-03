// @flow
import React, { Component } from "react";
import "./Utilities.css"


const footer = {
  position: "absolute",
  bottom: 0,
  width: '100%'
}

export default class Footer extends Component {

  render() {
    return (
      <div style={footer} className="text-center fs-14">
        <p className="text-opacity-50" >Harris Global Solutions, LLC. © 2018 </p>
      </div>
    );
  }
}
