import React from "react";
import { ReactComponent as InStockLogo } from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";
import "../../components/headerButton/HeaderButton";
import HeaderButton from "../headerButton/HeaderButton";

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
        <HeaderButton onClick={() => {}}>
          {/* TODO: add the route to the onClick! */}
          Warehouses
        </HeaderButton>
        <HeaderButton onClick={() => {}}>
          {/* TODO: add the route to the onClick! */}
          Inventory
        </HeaderButton>
      </div>
    </div>
  );
}
