

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./components/Header.jsx"; // to be added -> Ashley
import HeroFooter from "./components/HeroFooter/HeroFooter";
// import WarehouseList from "./components/WarehouseList/WarehouseList.jsx"; // to be added -> Miloan
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.jsx"; // to be added -> Miloan
// import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse.jsx"; // to be added -> Renish

// import InventoryList from "./components/InventoryList/InventoryList.jsx"; // to be added -> Ashley
// import InventoryDetails from "./components/InventoryDetails/InventoryDetails.jsx"; // to be added -> Renish
import AddEditInventory from "./components/AddEditInventory/AddEditInventory.jsx";
import "./App.scss";

// test rendering - remove after


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
        {/* <Header /> */}
        
        <Switch>
          {/* REMEMBER TO REMOVE - below route is only for dev testing */}
          <Route path="/" exact render={() => <AddEditInventory />} />

          {/* <Route
            path="/"
            exact
            render={(routerProps) => {
              <WarehouseList {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/warehouseDetails"
            render={(routerProps) => {
              <WarehouseDetails {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/warehouse/edit/:warehouseId"
            render={(routerProps) => {
              <AddEditWarehouse {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/warehouse/add"
            render={(routerProps) => {
              <AddEditWarehouse {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/inventory"
            render={(routerProps) => {
              <InventoryList {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/inventoryDetails"
            render={(routerProps) => {
              <InventoryDetails {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/inventory/add"
            render={(routerProps) => {
              <AddEditInventory {...routerProps} />;
            }}
          /> */}

          {/* <Route
            path="/inventory/edit/:inventoryId/:warehouseId"
            render={(routerProps) => {
              <AddEditInventory {...routerProps} />;
            }}
          /> */}
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }
}

