import React, { Component } from "react";
import InventoryListHeader from "./InventoryListHeader";
import InventoryListItem from "./InventoryListItem";
import DelModal from "../DelModal/DelModal";
import "./InventoryList.scss";
import { API_URL } from "../../utils/utils";
import axios from "axios";
import InventoryListColumns from "./InventoryListColumns";

export default class InventoryList extends Component {
  state = {
    inventoryData: [],
    show: false,
  };

  fetchData() {
    axios.get(`${API_URL}/inventory`).then(({ data }) => {
      this.setState({ inventoryData: data });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const closeDelete = () => {
      this.setState({
        show: false,
      });
    };

    const showDelete = (id, name) => {
      console.log(id, name);
      this.setState({ itemName: name, itemId: id, show: true });
    };

    const deleteHandler = (inventoryId) => {
      axios.delete(`${API_URL}/inventory/${inventoryId}`).then(() => {
        this.fetchData();
        this.setState({ show: false });
      });
    };

    const inventoryItems = this.state.inventoryData.map((item) => {
      return (
        <InventoryListItem
          key={item.id}
          data={item}
          url={`${this.props.match.url}`}
          showDelete={showDelete}
        />
      );
    });

    return (
      <div className="inventoryList__container">
        <InventoryListHeader />
        <InventoryListColumns />
        {inventoryItems}
        <DelModal
          show={this.state.show}
          onCloseHandler={closeDelete}
          onDeleteHandler={deleteHandler}
          itemId={this.state.itemId}
          itemName={this.state.itemName}
        />
      </div>
    );
  }
}
