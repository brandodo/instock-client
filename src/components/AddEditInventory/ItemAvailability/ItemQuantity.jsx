import React from "react";

export default function ItemQuantity({ value, handleChange }) {
  return (
    <div className="inventoryDetails__itemQuantity">
      <label className="inventoryDetails__label" htmlFor="quantity">
        Quantity
      </label>
      <input
        className="inventoryDetails__textInput"
        type="number"
        name="quantity"
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
