import React from "react";
import WarehouseOption from "./WarehouseOption";

export default function ItemWarehouse({ value, handleChange, data, isAdd }) {
  const warehouseList = (
    <select
      className="inventoryDetails__dropdown"
      name="warehouse"
      placeholder="Please select"
      value={"" || value}
      onChange={(event) => handleChange(event)}
    >
      {isAdd && (
        <option value="" disabled>
          Please select...
        </option>
      )}
      {data.map((warehouse) => {
        return (
          <WarehouseOption key={warehouse.id} value={warehouse.name} />
        );
      })}
    </select>
  );
  return (
    <div className="inventoryDetails__itemWarehouse">
      <label className="inventoryDetails__label" htmlFor="warehouse">
        Warehouse
      </label>
      {warehouseList}
    </div>
  );
}
