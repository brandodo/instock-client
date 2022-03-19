import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx"; // to be added -> Ashley
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.jsx"; // to be added -> Miloan
import InventoryDetails from "./components/InventoryDetails/InventoryDetails.jsx"; // to be added -> Ashley

import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* make sure component prop matches actual component */}
          <Route
            path="/"
            exact
            render={(routerProps) => {
              <WarehouseDetails {...routerProps} />;
            }}
          />
          {/* make sure component prop matches actual component */}
          <Route
            path="/inventory"
            render={(routerProps) => {
              <InventoryDetails {...routerProps} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
