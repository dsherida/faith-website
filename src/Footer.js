// @flow
import React, { Component } from "react";

const footer = {
  position: "absolute",
  bottom: 0,
  width: '100%'
}

export default class Footer extends Component {

  render() {
    return (
      <div style={footer} className="text-center">
        <p>© 2018, Faith, LLC.</p>
      </div>
    );
  }
}
