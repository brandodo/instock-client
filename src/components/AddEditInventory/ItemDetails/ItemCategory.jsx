import React from "react";
import CategoryOption from "./CategoryOption";

export default function ItemCategory({ value, handleChange, data }) {
  // TO DO: write function to populate cateogry drop-down
  // required:
  //   - get prop with inventory data
  //   - filter out unique categories
  //   - map through array to create options list

  const categoryList = (
    <select
      className="inventoryDetails__dropdown"
      name="category"
      placeholder="Please select"
      value={value}
      onChange={(event) => handleChange(event)}
    >
      {data
        .filter((val, index, self) => {
          return self.findIndex((v) => v.category === val.category) === index;
        })
        .map((item) => {
          return <CategoryOption key={item.id} value={item.category} />;
        })}
    </select>
  );

  return (
    <div className="inventoryDetails__itemCategory">
      <label className="inventoryDetails__label" htmlFor="category">
        Category
      </label>
      {categoryList}
    </div>
  );
}
