import React from "react";

export default function ItemQuantity({ value, handleChange }) {
  return (
    <div className="inventoryDetails__itemQuantity">
      <label className="inventoryDetails__label" htmlFor="quantity">
        Quantity
      </label>
      <input
        className={
          value <= 0
            ? "inventoryDetails__textInput inventoryDetails__textInput-error"
            : "inventoryDetails__textInput"
        }
        type="number"
        name="quantity"
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
