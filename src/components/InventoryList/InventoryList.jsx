import React, { Component } from "react";
import InventoryListHeader from "./InventoryListHeader";
import InventoryListItem from "./InventoryListItem";
import "./InventoryList.scss";
import { API_URL } from "../../utils/utils";
import axios from "axios";
import InventoryListColumns from "./InventoryListColumns";

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
      return <InventoryListItem data={item} url={`${this.props.match.url}`} />;
    });

    return (
      <div className="inventoryList__container">
        <InventoryListHeader />
        <InventoryListColumns />
        {inventoryItems}
      </div>
    );
  }
}
