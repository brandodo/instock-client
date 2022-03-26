import React, { useState } from "react";

export default function ItemName({ value, handleChange }) {
  const [error, setError] = useState(false);

  return (
    <div className="inventoryDetails__itemName">
      <label className="inventoryDetails__label" htmlFor="itemName">
        Item Name
      </label>
      <input
        className={`inventoryDetails__textInput ${
          error ? "inventoryDetails__textInput--error" : ""
        }`}
        type="text"
        name="itemName"
        placeholder="Item Name"
        value={value}
        onChange={(event) => {
          if (event.target.value === "") {
            setError(true);
          } else {
            setError(false);
          }
          handleChange(event);
        }}
      />
      <div
        className={`inventoryDetails__message ${
          error ? "inventoryDetails__message--error" : ""
        }`}
      >
        This field is required
      </div>
    </div>
  );
}
