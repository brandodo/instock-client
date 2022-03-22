import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import ItemAvailability from "./ItemAvailability/ItemAvailability.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import axios from "axios";
import "./AddEditInventory.scss";

// remove after testing
import inventoryData from "../../temp/inventories.json";

export default class AddEditInventory extends Component {
  state = {
    isAdd: false, // should this be passed as prop or use state?
    showQuantity: true,
    itemName: "",
    itemDescription: "",
    category: "",
    status: "",
    quantity: 0,
    warehouse: "",
    redirect: false,
  };

  componentDidMount() {
    if (!this.state.isAdd) {
      const inventoryEdit = inventoryData[inventoryData.length - 1];
      this.setState({
        itemName: inventoryEdit.itemName,
        itemDescription: inventoryEdit.description,
        category: inventoryEdit.category,
        status: inventoryEdit.status,
        quantity: inventoryEdit.quantity,
        warehouse: inventoryEdit.warehouseName,
      });
    }
  }

  render() {
    const displayQty = (status) => {
      return status === "outStock"
        ? this.setState({ showQuantity: false })
        : this.setState({ showQuantity: true });
    };

    const handleChange = (event) => {
      if (event.target.name === "status") {
        event.target.value === "inStock"
          ? this.setState({ status: "In Stock" })
          : this.setState({ status: "Out of Stock" });
      } else {
        this.setState({ [event.target.name]: event.target.value });
      }
      console.log(event.target.name, event.target.value);
    };

    const handleForm = () => {
      const inventoryEdit = inventoryData[inventoryData.length - 1];
      this.state.isAdd
        ? addInventory()
        : editInventory(inventoryEdit.id, inventoryEdit.warehouseID);
    };

    const addInventory = () => {
      axios
        .post("http://localhost:8080/inventory/add", {
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          category: this.state.category,
          status: this.state.status,
          quantity: this.state.quantity,
          warehouse: this.state.warehouse,
        })
        .then(() => {
          this.setState({ redirect: true });
        });
    };

    const editInventory = (inventoryId, warehouseId) => {
      axios
        .put(
          `http://localhost:8080/inventory/edit/${inventoryId}/${warehouseId}`,
          {
            itemName: this.state.itemName,
            itemDescription: this.state.itemDescription,
            category: this.state.category,
            status: this.state.status,
            quantity: this.state.quantity,
            warehouse: this.state.warehouse,
          }
        )
        .then(() => {
          this.setState({ redirect: true });
        });
    };

    return (
      <form className="inventoryDetails__form">
        <div className="inventoryDetails__container">
          <Link to="/">
            <img
              className="inventoryDetails__back"
              src={backArrow}
              alt="back-nav"
            />
          </Link>
          {/* should this be passed as prop or use state? */}
          <h1 className="inventoryDetails__header">
            {this.state.isAdd
              ? "Add New Inventory Item"
              : "Edit Inventory Item"}
          </h1>
        </div>
        <hr></hr>
        <div className="inventoryDetails__body">
          <ItemDetails
            itemName={this.state.itemName}
            itemDescription={this.state.itemDescription}
            category={this.state.category}
            handleChange={handleChange}
            data={inventoryData}
          />
          <hr></hr>
          <ItemAvailability
            showQty={this.state.showQuantity}
            changeHandler={displayQty}
            status={this.state.status}
            quantity={this.state.quantity}
            warehouse={this.state.warehouse}
            handleChange={handleChange}
            data={inventoryData}
          />
        </div>
        <div className="inventoryDetails__btn-container">
          <Link to="/inventory" className="inventoryDetails__link ">
            <button className="inventoryDetails__cancel">Cancel</button>
          </Link>
          <button
            className="inventoryDetails__submit "
            onClick={() => handleForm()}
          >
            {this.state.isAdd ? "+ Add Item" : "Save"}
          </button>
        </div>
      </form>
    );
  }
}
