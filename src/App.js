

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./components/Header.jsx"; // to be added -> Ashley
import HeroFooter from "./components/HeroFooter/HeroFooter";
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.jsx"; // to be added -> Miloan
// import InventoryDetails from "./components/InventoryDetails/InventoryDetails.jsx"; // to be added -> Ashley
import "./App.scss";

// test rendering - remove after
import AddEditInventory from "./components/AddEditInventory/AddEditInventory.jsx";

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
          {/* REMEMBER TO REMOVE - below route is only for dev testing */}
          <Route path="/" exact render={() => <AddEditInventory />} />
          {/* make sure component prop matches actual component */}
          {/* <Route
            path="/"
            exact
            render={(routerProps) => {
              <WarehouseDetails {...routerProps} />;
            }}
          /> */}
          {/* make sure component prop matches actual component */}
          {/* <Route
            path="/inventory"
            render={(routerProps) => {
              <InventoryDetails {...routerProps} />;
            }}
          /> */}
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }
}

