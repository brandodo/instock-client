import React, { useState } from "react";

export default function WarehouseFIeld({
  name,
  children,
  handleChange,
  value,
  placeholder,
}) {
  const [error, setError] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);

  const checkPhoneNumber = (phone) => {
    const phoneRegex = new RegExp(
      "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
    );
    const isValid = phoneRegex.exec(phone) ? true : false;
    return isValid;
  };

  const checkEmail = (email) => {
    const emailRegex = new RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$");
    const isValid = emailRegex.exec(email);
    return isValid;
  };

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
          let formatValid = true;

          if (!event.target.value) {
            setError(true);
          } else {
            setError(false);
          }

          if (event.target.name === "phone") {
            formatValid = checkPhoneNumber(event.target.value);
            formatValid ? setPhoneWarning(false) : setPhoneWarning(true);
          }

          if (event.target.name === "email") {
            formatValid = checkEmail(event.target.value);
            formatValid ? setEmailWarning(false) : setEmailWarning(true);
          }

          handleChange(event, formatValid);
        }}
      />
      <div
        className={`inventoryDetails__message ${
          error || phoneWarning || emailWarning
            ? "inventoryDetails__message--error"
            : ""
        }`}
      >
        {phoneWarning
          ? "Please enter a valid number (e.g. (###) ###-####)"
          : emailWarning
          ? "Please enter a valid email (e.g. johndoe@gmail.com)"
          : "This field is required"}
      </div>
    </div>
  );
}
