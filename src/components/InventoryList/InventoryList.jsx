import React, { Component } from "react";
import InventoryListHeader from "./InventoryListHeader";
import InventoryListItem from "./InventoryListItem";
import "./InventoryList.scss";
import { API_URL } from "../../utils/utils";
import axios from "axios";

export default class InventoryList extends Component {
  state = {
    inventoryData: [],
  };

  componentDidMount() {
    axios.get(`${API_URL}/inventory`).then(({ data }) => {
      this.setState({ inventoryData: data });
    });
  }

  render() {
    const inventoryItems = this.state.inventoryData.map((item) => {
      return <InventoryListItem data={item} />;
    });

    return (
      <div className="inventoryList__container">
        <InventoryListHeader />
        {inventoryItems}
      </div>
    );
  }
}
