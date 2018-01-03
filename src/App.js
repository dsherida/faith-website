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
        <div>
          {/* Header */}
          <Header />

          {/* Routes */}
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />

          {/* Footer */}
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
