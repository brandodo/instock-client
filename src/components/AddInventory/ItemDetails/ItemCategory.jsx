import React from "react";
import CategoryOption from "./CategoryOption";

export default function ItemCategory() {
  // TO DO: write function to populate cateogry drop-down
  // required:
  //   - get prop with inventory data
  //   - filter out unique categories
  //   - map through array to create options list

  const categoryList = (
    <select
      className="inventoryDetails__dropdown"
      name="itemCategory"
      placeholder="Please select"
    >
      <CategoryOption />
    </select>
  );

  return (
    <div className="inventoryDetails__itemCategory">
      <label className="inventoryDetails__label" htmlFor="itemCategory">
        Category
      </label>
      {categoryList}
    </div>
  );
}
