import React from "react";
import "./InventoryItemDetails.scss";
import Edit from "../../assets/images/Icons/edit-24px.svg";
import Arrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { API_URL } from "../../utils/utils.js";
import { Link } from "react-router-dom";
import axios from "axios";

class InventoryItemDetails extends React.Component {
  state = {
    error: false,
    inventory: null,
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${API_URL}/inventory/${id}`)
      .then((resp) => {
        this.setState({ inventory: resp.data });
      })
      .catch((err) => {
        this.setState({ error: true });
        console.error(err);
      });
  }
  render() {
    if (this.state.error) {
      return <main className="load-screen">Error loading inventory!</main>;
    }
    if (!this.state.inventory) {
      return <main className="load-screen">Loading...</main>;
    }

    let stockDecide =
      "inventorydetails__inventory-status inventorydetails__inventory-status";
    if (this.state.inventory.status === "Out of Stock") {
      stockDecide = stockDecide + "--outstock";
    } else {
      stockDecide = stockDecide + "--instock";
    }

    const inventory = this.state.inventory;

    return (
      <>
        <div className="inventorydetails">
          <div className="inventorydetails__nav">
            <div className="inventorydetails__nav-wrapper">
              <Link to="/inventories">
                {" "}
                <img
                  className="inventorydetails__image"
                  src={Arrow}
                  alt="go back to inventory list"
                />{" "}
              </Link>
              <h1 className="inventorydetails__title">{inventory.itemName}</h1>
            </div>

            <form className="inventorydetails__form">
              <label
                className="inventorydetails__form-label"
                htmlFor="text"
              ></label>
              <Link to={`/edit/inventory/${inventory.id}`}>
                <button className="inventorydetails__button" type="submit">
                  <img
                    className="inventorydetails__form-edit-icon"
                    src={Edit}
                    alt="search-icon"
                  />
                  <h3 className="inventorydetails__button-text">Edit</h3>
                </button>
              </Link>
            </form>
          </div>

          <div className="inventorydetails__bottom">
            <div className="inventorydetails__column-left">
              <h4 className="inventorydetails__header">Item Description:</h4>
              <p className="inventorydetails__specifics">
                {inventory.description}
              </p>
              <h4 className="inventorydetails__header">Category:</h4>
              <p className="inventorydetails__specifics">
                {inventory.category}
              </p>
            </div>

            <div className="inventorydetails__column-right">
              <div className="column-right--row">
                <div className="status">
                  <h4 className="inventorydetails__header">Status:</h4>
                  <p className={stockDecide}> {inventory.status}</p>
                </div>

                <div className="quantity">
                  <h4 className="inventorydetails__header">Quantity:</h4>
                  <p className="inventorydetails__inventory-info">
                    {inventory.quantity}
                  </p>
                </div>
              </div>
              <h4 className="inventorydetails__header">Warehouse:</h4>
              <p className="inventorydetails__specifics">
                {inventory.warehouseName}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryItemDetails;
