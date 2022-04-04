import React from "react";

export default function InventoryListHeader() {
  return (
    <div className="inventoryList__headerContainer">
      <h2 className="inventoryList__header">Inventory</h2>
      <div className="inventoryList__headerRight">
        <input
          className="inventoryList__search"
          type="search"
          placeholder="Search..."
        />
        <button className="inventoryList__button">+ Add New Item</button>
      </div>
    </div>
  );
}
