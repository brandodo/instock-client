import React from "react";
import { ReactComponent as InStockLogo } from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";
import "../../components/headerButton/HeaderButton";
import HeaderButton from "../../components/headerButton/HeaderButton";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/warehouses">
          <InStockLogo className="header__logo" />
        </Link>
      </div>
      <div className="header__buttons">
        <HeaderButton>
          {/* TODO: add the route to the onClick! */}
          Warehouses
        </HeaderButton>
        <HeaderButton>
          {/* TODO: add the route to the onClick! */}
          Inventory
        </HeaderButton>
      </div>
    </div>
  );
}
