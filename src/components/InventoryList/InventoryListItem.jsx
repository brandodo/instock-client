import React from "react";
import { Link } from "react-router-dom";
import chevRight from "../../assets/images/Icons/chevron_right-24px.svg";
import deleteButton from "../../assets/images/Icons/delete_outline-24px.svg";
import edit from "../../assets/images/Icons/edit-24px.svg";

export default function InventoryListItem({ data }) {
  const { id, warehouseName, itemName, category, status, quantity } = data;

  const stockStyling =
    status.toLowerCase() === "in stock"
      ? "inventoryList__text--inStock"
      : "inventoryList__text--outStock";

  return (
    <div className="inventoryList__itemContainer">
      <hr></hr>
      <div className="inventoryList__itemInfo">
        <div className="inventoryList__textContainer">
          <p className="inventoryList__textHeader">INVENTORY ITEM</p>
          <Link to={`/inventory/${id}`} className="inventoryList__link">
            {itemName}
            <img
              className="inventoryList__chevRight"
              src={chevRight}
              alt="nav-arrow"
            />
          </Link>
        </div>
        <div className="inventoryList__textContainer">
          <p className="inventoryList__textHeader">CATEGORY</p>
          <p className="inventoryList__text">{category}</p>
        </div>
        <div className="inventoryList__textContainer">
          <p className="inventoryList__textHeader">STATUS</p>
          <p className={`inventoryList__text ${stockStyling}`}>
            {status.toUpperCase()}
          </p>
        </div>
        <div className="inventoryList__textContainer">
          <p className="inventoryList__textHeader">QTY</p>
          <p className="inventoryList__text">{quantity}</p>
        </div>
        <div className="inventoryList__textContainer">
          <p className="inventoryList__textHeader">WAREHOUSE</p>
          <p className="inventoryList__text">{warehouseName}</p>
        </div>
      </div>
      <div className="inventoryList__buttons">
        <img
          className="inventoryList__delete"
          src={deleteButton}
          alt="delete-button"
        />
        <Link to={`/edit/inventory/${id}`}>
          <img className="inventoryList__edit" src={edit} alt="edit-button" />
        </Link>
      </div>
    </div>
  );
}
