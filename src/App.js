// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Head from "./Head";
import Body from "./Body";
import Foot from "./Foot";

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default App;
