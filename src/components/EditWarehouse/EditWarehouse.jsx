import React, { Component } from "react";
import EditWarehouseDetails from "./EditWarehouseDetails.jsx";
import EditContactDetails from "./EditContactDetails.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";

export default class EditWarehouse extends Component {
  render() {
    return (
      <form className="warehousedetails__edit-form">
        <div className="warehousedetails__edit-header">
          <img
            className="warehousedetails__edit-back"
            src={backArrow}
            alt="back-nav"
          />
          <h1 className="warehousedetails__edit-header-text">Edit Warehouse</h1>
        </div>
        <EditWarehouseDetails />
        <EditContactDetails />
        <button>Cancel</button>
        <button>Save</button>
      </form>
    );
  }
}
