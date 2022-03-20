import React from "react";

export default function ItemDescription() {
  return (
    <div className="inventoryDetails__itemDescription">
      <label className="inventoryDetails__label" htmlFor="itemDescription">
        Item Description
      </label>
      <textarea
        className="inventoryDetails__longText"
        rows="6"
        type="text"
        name="itemDescription"
        placeholder="Please enter a brief item description..."
      />
    </div>
  );
}
