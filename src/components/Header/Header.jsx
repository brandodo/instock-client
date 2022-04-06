import React from "react";
import { ReactComponent as InStockLogo } from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";
import "../../components/HeaderButton/HeaderButton";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import { useHistory, useLocation } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="header">
      <div className="header__left">
        <InStockLogo
          className="header__logo"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
      <div className="header__buttons">
        <HeaderButton
          className={`${pathname === "/warehouses" ? "selected" : ""}`}
          onClick={() => {
            history.push("/warehouses");
          }}
        >
          Warehouses
        </HeaderButton>
        <HeaderButton
          className={`${pathname === "/inventory" ? "selected" : ""}`}
          onClick={() => {
            history.push("/inventory");
          }}
        >
          Inventory
        </HeaderButton>
      </div>
    </div>
  );
}
