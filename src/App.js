import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header"; // to be added -> Ashley
import HeroFooter from "./components/HeroFooter/HeroFooter";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./components/Warehouses/Warehouses";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse.jsx";
// import InventoryList from "./components/InventoryList/InventoryList.jsx"; 
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

import AddEditInventory from "./components/AddEditInventory/AddEditInventory";
import "./App.scss";

export default class App extends Component {
  state = {
    data: null,
    itemdata: null,
  };
  /* Miloan to review if still needed, remove if not needed */

  onChangeHandler = (data) => {
    this.setState({
      data: data,
    });
  };

  onChangeHandlerItem = (data) => {
    this.setState({
      itemdata: data,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Redirect exact from="/" to="/warehouses" />

          <Route
            exact
            path="/warehouses"
            render={(props) => (
              <Warehouses
                {...props}
                data={this.state.data}
                onChangeHandler={this.onChangeHandler}
              />
            )}
          />

          <Route
            path="/warehouses/:id"
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
          />

          {/* <Route
            path="/add/warehouses"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
		      /> */}

          {/* <Route
            path="/edit/warehouses/:id"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
          />

          {/* <Route
            path="/inventory"
            exact
            render={(routerProps) => <InventoryList {...routerProps} />}
          /> */}

          <Route
            path="/inventory/:id"
            render={(routerProps) => <InventoryItemDetails {...routerProps} />}
          />

          <Route
            path="/add/inventory"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />
          <Route
            path="/edit/inventory/:id"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }
}
