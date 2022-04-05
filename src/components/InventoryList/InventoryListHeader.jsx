import React from "react";
import { useHistory } from "react-router-dom";

export default function InventoryListHeader() {
  const history = useHistory();

  return (
    <div className="inventoryList__headerContainer">
      <h2 className="inventoryList__header">Inventory</h2>
      <div className="inventoryList__headerRight">
        <input
          className="inventoryList__search"
          type="search"
          placeholder="Search..."
        />
        <button
          className="inventoryList__button"
          onClick={() => history.push("/add/inventory")}
        >
          + Add New Item
        </button>
      </div>
    </div>
  );
}
