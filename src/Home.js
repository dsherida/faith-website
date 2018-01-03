import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

import logo from "./logo.svg";
import "./App.css";

export default class Home extends Component {
  render() {
    return (
      <div className="h-100">
        <Body />
      </div>
    );
  }
}
