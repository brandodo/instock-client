import React from "react";

export default function ItemStatus({ changeHandler }) {
  return (
    <div className="inventoryDetails__itemStatus">
      <label className="inventoryDetails__label" htmlFor="statusOption">
        Status
      </label>
      <div className="inventoryDetails__statusOptions">
        <div className="inventoryDetails__optionLeft">
          <input
            className="inventoryDetails__option"
            name="statusOption"
            type="radio"
            value="inStock"
            onChange={(event) => changeHandler(event.target.value)}
          />
          <label className="inventoryDetails__label" htmlFor="inStock">
            In Stock
          </label>
        </div>
        <div className="inventoryDetails__optionRight">
          <input
            className="inventoryDetails__option"
            name="statusOption"
            type="radio"
            value="outStock"
            onChange={(event) => changeHandler(event.target.value)}
          />
          <label className="inventoryDetails__label" htmlFor="outStock">
            Out of Stock
          </label>
        </div>
      </div>
    </div>
  );
}
