import React from "react";
import ItemName from "./ItemName";
import ItemDescription from "./ItemDescription";
import ItemCategory from "./ItemCategory";

export default function ItemDetails({
  itemName,
  itemDescription,
  category,
  handleChange,
  data
}) {
  return (
    <div className="inventoryDetails__itemDetails">
      <h2 className="inventoryDetails__subHeader">Item Details</h2>
      <ItemName value={itemName} handleChange={handleChange} />
      <ItemDescription value={itemDescription} handleChange={handleChange} />
      <ItemCategory value={category} handleChange={handleChange} data={data}/>
    </div>
  );
}
