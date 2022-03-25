import React, { useState } from "react";

export default function ItemQuantity({ value, handleChange }) {
  const [error, setError] = useState(false);

  return (
    <div className="inventoryDetails__itemQuantity">
      <label className="inventoryDetails__label" htmlFor="quantity">
        Quantity
      </label>
      <input
        className={`inventoryDetails__textInput ${
          error ? "inventoryDetails__textInput--error" : ""
        }`}
        type="number"
        name="quantity"
        value={value}
        onChange={(event) => {
          if (event.target.value === "" || event.target.value === "0") {
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
        This field is required - quantity cannot be 0, set Status to Out of
        Stock.
      </div>
    </div>
  );
}
