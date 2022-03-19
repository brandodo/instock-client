import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
// import Warehouse page component
// import Inventory page component

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* add component/render prop for Warehouse page */}
          <Route path="/" exact />
          {/* add component/render prop for Inventory page */}
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    );
  }
}
