import React from "react";
import TextField from "./TextField";

export default function WarehouseDetails({ handleChange, data }) {
  const { warehouseName, address, city, country } = data;

  return (
    <div className="warehouseDetails__details">
      <h2 className="warehouseDetails__subHeader">Warehouse Details</h2>
      <div className="warehouseDetails__top">
        <TextField
          handleChange={handleChange}
          name="warehouseName"
          value={warehouseName}
        >
          Warehouse Name
        </TextField>
        <TextField handleChange={handleChange} name="address" value={address}>
          Street Address
        </TextField>
        <TextField handleChange={handleChange} name="city" value={city}>
          City
        </TextField>
        <TextField handleChange={handleChange} name="country" value={country}>
          Country
        </TextField>
      </div>
    </div>
  );
}
