import React from "react";
import sortArrows from "../../assets/images/Icons/sort-24px.svg";
export default function InventoryListColumns() {
  return (
    <div className="inventoryList__tableHeaders">
      <div className="inventoryList__mainContainer">
        <div className="inventoryList__columnContainer">
          <h3 className="inventoryList__columnHeader">INVENTORY ITEM</h3>
          <img className="inventoryList__sortArrow" src={sortArrows} />
        </div>
        <div className="inventoryList__columnContainer">
          <h3 className="inventoryList__columnHeader">CATEGORY</h3>
          <img className="inventoryList__sortArrow" src={sortArrows} />
        </div>
        <div className="inventoryList__columnContainer">
          <h3 className="inventoryList__columnHeader">STATUS</h3>
          <img className="inventoryList__sortArrow" src={sortArrows} />
        </div>
        <div className="inventoryList__columnContainer">
          <h3 className="inventoryList__columnHeader">QTY</h3>
          <img className="inventoryList__sortArrow" src={sortArrows} />
        </div>
        <div className="inventoryList__columnContainer">
          <h3 className="inventoryList__columnHeader">WAREHOUSE</h3>
          <img className="inventoryList__sortArrow" src={sortArrows} />
        </div>
      </div>
      <div className="inventoryList__columnContainer inventoryList__columnContainer--actions">
        <h3 className="inventoryList__columnHeader">ACTIONS</h3>
      </div>
    </div>
  );
}
