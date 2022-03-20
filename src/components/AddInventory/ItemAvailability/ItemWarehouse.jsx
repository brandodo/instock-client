import React from "react";
import WarehouseOption from "./WarehouseOption";

export default function ItemWarehouse() {
  // TO DO: write function to populate warehouse drop-down
  // required:
  //   - get prop with inventory data
  //   - filter out unique warehouses
  //   - map through array to create options list

  const warehouseList = (
    <select
      className="inventoryDetails__dropdown"
      name="itemWarehouse"
      placeholder="Please select"
    >
      <WarehouseOption />
    </select>
  );
  return (
    <div className="inventoryDetails__itemWarehouse">
      <label className="inventoryDetails__label" htmlFor="itemWarehouse">
        Warehouse
      </label>
      {warehouseList}
    </div>
  );
}
