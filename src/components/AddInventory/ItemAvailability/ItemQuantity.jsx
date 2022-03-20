import React from "react";

export default function ItemQuantity() {
  return (
    <div className="inventoryDetails__itemQuantity">
      <label className="inventoryDetails__label" htmlFor="itemQuantity">
        Quantity
      </label>
      <input
        className="inventoryDetails__textInput"
        type="text"
        name="itemQuantity"
      />
    </div>
  );
}
