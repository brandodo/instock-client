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
      {data
        .filter((val, index, self) => {
          return (
            self.findIndex((v) => v.warehouseName === val.warehouseName) ===
            index
          );
        })
        .map((item) => {
          return <WarehouseOption key={item.id} value={item.warehouseName} />;
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
