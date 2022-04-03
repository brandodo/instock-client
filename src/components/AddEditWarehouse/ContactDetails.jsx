import React from "react";
import TextField from "./TextField";

export default function ContactDetails({ handleChange, data }) {
  const { contactName, position, phone, email } = data;
  return (
    <div className="warehouseDetails__contactDetails">
      <h2 className="warehouseDetails__subHeader">Contact Details</h2>
      <div className="warehouseDetails__bottom">
        <TextField
          handleChange={handleChange}
          name="contactName"
          value={contactName}
        >
          Contact Name
        </TextField>
        <TextField handleChange={handleChange} name="position" value={position}>
          Position
        </TextField>
        <TextField handleChange={handleChange} name="phone" value={phone}>
          Phone Number
        </TextField>
        <TextField handleChange={handleChange} name="email" value={email}>
          Email
        </TextField>
      </div>
    </div>
  );
}
