import React from "react";

export default function ItemStatus({ value, handleChange }) {
  return (
    <div className="inventoryDetails__itemStatus">
      <label className="inventoryDetails__label" htmlFor="status">
        Status
      </label>
      <div className="inventoryDetails__statusOptions">
        <div className="inventoryDetails__optionLeft">
          <input
            className="inventoryDetails__option"
            name="status"
            type="radio"
            value="inStock"
            onChange={(event) => handleChange(event)}
            checked={value.toLowerCase() === "in stock"}
          />
          <label className="inventoryDetails__label" htmlFor="inStock">
            In Stock
          </label>
        </div>
        <div className="inventoryDetails__optionRight">
          <input
            className="inventoryDetails__option"
            name="status"
            type="radio"
            value="outStock"
            onChange={(event) => handleChange(event)}
            checked={value.toLowerCase() === "out of stock"}
          />
          <label className="inventoryDetails__label" htmlFor="outStock">
            Out of Stock
          </label>
        </div>
      </div>
    </div>
  );
}
