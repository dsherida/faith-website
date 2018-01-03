// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="h-100">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
