import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx"; // to be added -> Ashley
import HeroFooter from "./components/HeroFooter/HeroFooter";
// import WarehouseList from "./components/WarehouseList/WarehouseList.jsx"; // to be added -> Miloan
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.jsx"; // to be added -> Miloan
// import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse.jsx"; // to be added -> Renish

// import InventoryList from "./components/InventoryList/InventoryList.jsx"; // to be added -> Ashley
// import InventoryDetails from "./components/InventoryDetails/InventoryDetails.jsx"; // to be added -> Renish
import AddEditInventory from "./components/AddEditInventory/AddEditInventory.jsx";
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
          {/* <Route
            path="/warehouses"
            exact
            render={(routerProps) => <WarehouseList {...routerProps} />}
          /> */}

          {/* <Route
            path="/warehouses/:id"
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
          /> */}

          {/* <Route
            path="/warehouses/edit/:id"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
          /> */}

          {/* <Route
            path="/warehouses/add"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
          /> */}

          {/* <Route
            path="/inventory"
            exact
            render={(routerProps) => <InventoryList {...routerProps} />}
          /> */}

          {/* <Route
            path="/inventory/:id"
            render={(routerProps) => <InventoryDetails {...routerProps} />}
          /> */}

          <Route
            path="/inventory/add"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />

          <Route
            path="/inventory/edit/:id"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }
}
