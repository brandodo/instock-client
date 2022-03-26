import React from "react";
import ItemStatus from "./ItemStatus";
import ItemQuantity from "./ItemQuantity";
import ItemWarehouse from "./ItemWarehouse";

export default function ItemAvailability({
  showQty,
  status,
  quantity,
  warehouse,
  handleChange,
  data,
  isAdd,
}) {
  return (
    <div className="inventoryDetails__itemAvailability">
      <h2 className="inventoryDetails__subHeader">Item Availability</h2>
      <ItemStatus value={status} handleChange={handleChange} />
      {showQty && <ItemQuantity value={quantity} handleChange={handleChange} />}
      <ItemWarehouse
        value={warehouse}
        handleChange={handleChange}
        data={data}
        isAdd={isAdd}
      />
    </div>
  );
}
