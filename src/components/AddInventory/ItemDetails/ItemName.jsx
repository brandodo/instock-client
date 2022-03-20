import React from "react";

export default function ItemName() {
  return (
    <div className="inventoryDetails__itemName">
      <label className="inventoryDetails__label" htmlFor="itemName">
        Item Name
      </label>
      <input
        className="inventoryDetails__textInput"
        type="text"
        name="itemName"
        placeholder="Item Name"
      />
    </div>
  );
}
