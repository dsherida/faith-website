// @flow
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Jobs from "./Jobs";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div id="App-main">
          {/* Header */}
          <Header />

          {/* Routes */}
          <div id="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/jobs" component={Jobs} />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
