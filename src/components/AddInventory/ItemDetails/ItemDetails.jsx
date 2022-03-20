import React from "react";
import ItemName from "./ItemName";
import ItemDescription from "./ItemDescription";
import ItemCategory from "./ItemCategory";

export default function ItemDetails() {
  return (
    <div className="inventoryDetails__itemDetails">
      <h2 className="inventoryDetails__subHeader">Item Details</h2>
      <ItemName />
      <ItemDescription />
      <ItemCategory />
    </div>
  );
}
