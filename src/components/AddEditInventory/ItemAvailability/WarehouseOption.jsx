import React from "react";

export default function WarehouseOption({ value, id }) {
  return (
    <>
      <option id={id}>{value}</option>
    </>
  );
}
