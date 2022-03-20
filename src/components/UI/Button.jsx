import React from "react";
import "./Button.scss";

export default function Button({ className, text, clickHandler }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={(event) => {
        clickHandler ? clickHandler() : event.preventDefault();
      }}
    >
      {text}
    </button>
  );
}
