import React, { useState } from "react";

export default function WarehouseFIeld({
  name,
  children,
  handleChange,
  value,
  placeholder,
}) {
  const [error, setError] = useState(false);

  return (
    <div className="warehouseDetails__field">
      <label className="warehouseDetails__label" htmlFor={name}>
        {children}
      </label>
      <input
        className={`warehouseDetails__input ${
          error ? "warehouseDetails__input--error" : ""
        }`}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder || children}
        onChange={(event) => {
          if (!event.target.value) {
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
