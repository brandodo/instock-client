import React from "react";
import { ReactComponent as InStockLogo } from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";
import "../../components/HeaderButton/HeaderButton";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

import { useHistory } from "react-router-dom";

export default function Header(props) {
  const history = useHistory();

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
          onClick={() => {
            history.push("/warehouses");
          }}
        >
          Warehouse
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            history.push("/inventories");
          }}
        >
          Inventory
        </HeaderButton>
      </div>
    </div>
  );
}
