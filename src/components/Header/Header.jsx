import React from "react";
import { ReactComponent as InStockLogo } from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";
import "../../components/headerButton/HeaderButton";
import HeaderButton from "../../components/headerButton/HeaderButton";

import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <InStockLogo
          className="header__logo"
          onClick={() => {
            navigate.push("/");
          }}
        />
      </div>
      <div className="header__buttons">
        <HeaderButton
          onClick={() => {
            navigate.push("/warehouses");
          }}
        >
          {/* TODO: add the route to the onClick! */}
          Warehouses
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            navigate.push("/inventory");
          }}
        >
          {/* TODO: add the route to the onClick! */}
          Inventory
        </HeaderButton>
      </div>
    </div>
  );
}
