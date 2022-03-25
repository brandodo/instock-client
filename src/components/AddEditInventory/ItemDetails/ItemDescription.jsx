import React, { useState } from "react";

export default function ItemDescription({ value, handleChange }) {
  const [error, setError] = useState(false);
  return (
    <div className="inventoryDetails__itemDescription">
      <label className="inventoryDetails__label" htmlFor="itemDescription">
        Item Description
      </label>
      <textarea
        className={`inventoryDetails__longText ${
          error ? "inventoryDetails__longText--error" : ""
        }`}
        rows="6"
        type="text"
        name="itemDescription"
        placeholder="Please enter a brief item description..."
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
