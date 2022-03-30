import React from "react";
import "./HeaderButton.scss";

export default function HeaderButton({ children, onClick }) {
  return (
    <button className="header__button" onClick={onClick}>
      {children}
    </button>
  );
}
