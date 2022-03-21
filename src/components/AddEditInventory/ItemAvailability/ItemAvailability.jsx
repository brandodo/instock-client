import React from "react";
import ItemStatus from "./ItemStatus";
import ItemQuantity from "./ItemQuantity";
import ItemWarehouse from "./ItemWarehouse";

export default function ItemAvailability({ showQty, changeHandler }) {
  return (
    <div className="inventoryDetails__itemAvailability">
      <h2 className="inventoryDetails__subHeader">Item Availability</h2>
      <ItemStatus changeHandler={changeHandler} />
      {showQty && <ItemQuantity />}
      <ItemWarehouse />
    </div>
  );
}
