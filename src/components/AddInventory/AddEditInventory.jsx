import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button.jsx";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import ItemAvailability from "./ItemAvailability/ItemAvailability.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import "./AddEditInventory.scss";

export default class AddEditInventory extends Component {
  state = {
    showQuantity: true,
  };

  render() {
    const displayQty = (status) => {
      return status === "outStock"
        ? this.setState({ showQuantity: false })
        : this.setState({ showQuantity: true });
    };

    return (
      // add logic to include props depending on which page to render, add or edit
      <form className="inventoryDetails__form">
        <div className="inventoryDetails__container">
          {/* TO DO: add Link to go back to inventory page */}
          <img
            className="inventoryDetails__back"
            src={backArrow}
            alt="back-nav"
          />
          {/* TO DO: logic to render header */}
          <h1 className="inventoryDetails__header">Add New Inventory Item</h1>
        </div>
        <hr></hr>
        <div className="inventoryDetails__body">
          <ItemDetails />
          <hr></hr>
          <ItemAvailability
            showQty={this.state.showQuantity}
            changeHandler={displayQty}
          />
        </div>
        <div className="inventoryDetails__btn-container">
          {/* TO DO: add Link to go back to inventory page */}
          <Button className="inventoryDetails__cancel" text="Cancel" />
          <Button className="inventoryDetails__submit" text="+ Add Item" />
          {/* TO DO: logic to render submit button text */}
        </div>
      </form>
    );
  }
}
