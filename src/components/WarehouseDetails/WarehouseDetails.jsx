import React from "react";
import DelModal from "../DelModal/DelModal";
import "./WarehouseDetails.scss";
import Arrow from "../../assets/images/Icons/arrow_back-24px.svg";
import Trash from "../../assets/images/Icons/delete_outline-24px.svg";
import Edit from "../../assets/images/Icons/edit-24px.svg";
import Chevron from "../../assets/images/Icons/chevron_right-24px.svg";
import Sort from "../../assets/images/Icons/sort-24px.svg";
import axios from "axios";
import { API_URL } from "../../utils/utils";
import { Link } from "react-router-dom";
import { get } from "lodash";

class WarehouseDetails extends React.Component {
  state = {
    show: false,
    inventory: null,
    loaded: false,
    selectedWarehouse: null,
    isUpdated: false,
  };

  onCloseHandler = () => {
    this.setState({
      show: false,
    });
  };

  onTrashHandler = (e) => {
    this.setState({
      show: true,
      itemId: e.target.id,
      itemName: e.target.name,
    });
  };

  onDeleteHandler = async (itemid) => {
    const warehouseId = this.props.match.params.id;

    await axios
      .delete(`${API_URL}/inventory/${itemid}`)
      .then((response) => {
        this.setState({
          loaded: true,
          show: false,
        });
      })
      .catch((err) => console.log("error!", err));

    await axios
      .get(`${API_URL}/warehouses/${warehouseId}/inventory`)
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    let data = this.props.datas;
    axios
      .get(`${API_URL}/warehouses/${id}`)
      .then(async (res) => {
        data = res.data;
        this.setState({ selectedWarehouse: data });
        axios.get(`${API_URL}/warehouses/${id}/inventory`).then((res) => {
          this.setState({
            inventory: res.data,
            loaded: true,
          });
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  updatedData = () => {
    this.setState({ isUpdated: true });
  };

  render() {
    let stockDecide;
    if (!this.state.selectedWarehouse || !this.state.inventory) {
      return <main className="load-screen">Loading...</main>;
    }

    return (
      <section className="warehousedetails">
        <div className="warehousedetails__nav">
          <div className="warehousedetails__nav-wrapper">
            <Link to="/warehouses">
              {" "}
              <img
                className="warehousedetails__image"
                src={Arrow}
                alt="go back to warehouse list"
              />{" "}
            </Link>
            <h1 className="warehousedetails__title">
              {this.state.selectedWarehouse.name}
            </h1>
          </div>
          <form className="warehousedetails__form">
            <label
              className="warehousedetails__form-label"
              htmlFor="text"
            ></label>
            <Link to={`/edit/warehouses/${this.state.selectedWarehouse.id}`}>
              <button className="warehousedetails__button" type="submit">
                <img
                  className="warehousedetails__form-edit-icon"
                  src={Edit}
                  alt="search-icon"
                />
                <h3 className="warehousedetails__button-text">Edit</h3>
              </button>
            </Link>
          </form>
        </div>
        <div className="warehousedetails__specifics">
          <div className="warehousedetails__specifics-top">
            <h4 className="warehousedetails__specifics-location">
              WAREHOUSE ADDRESS:
            </h4>
            <p className="warehousedetails__specifics-address">
              {this.state.selectedWarehouse.address}
            </p>
            <p className="warehousedetails__specifics-country">
              {this.state.selectedWarehouse.city},{" "}
              {this.state.selectedWarehouse.country}
            </p>
          </div>
          <div className="warehousedetails__specifics-bottom">
            <div className="warehousedetails__specifics-bottom-upper-section">
              <h4 className="warehousedetails__specifics-contact">
                CONTACT NAME:
              </h4>
              <p className="warehousedetails__specifics-contact-name">{`${get(
                this.state.selectedWarehouse,
                "contact.name"
              )}`}</p>
              <p className="warehousedetails__specifics-contact-position">{`${get(
                this.state.selectedWarehouse,
                "contact.position"
              )}`}</p>
            </div>
            <div className="warehouse__specifics-bottom-lower-section">
              <h4 className="warehousedetails__specifics-contact-information">
                CONTACT INFORMATION:
              </h4>
              <p className="warehousedetails__specifics-contact-number">{`${get(
                this.state.selectedWarehouse,
                "contact.phone"
              )}`}</p>
              <p className="warehousedetails__specifics-contact-email">{`${get(
                this.state.selectedWarehouse,
                "contact.email"
              )}`}</p>
            </div>
          </div>
        </div>

        <ul className="warehousedetails-topbar">
          <li className="warehousedetails-topbar__inventory">
            INVENTORY ITEM
            <img
              className="warehousedetails-topbar__sort"
              src={Sort}
              alt="up arrow and down arrow"
            />
          </li>
          <li className="warehousedetails-topbar__category">
            CATEGORY{" "}
            <img
              className="warehousedetails-topbar__sort"
              src={Sort}
              alt="up arrow and down arrow"
            />
          </li>
          <li className="warehousedetails-topbar__status">
            STATUS{" "}
            <img
              className="warehousedetails-topbar__sort"
              src={Sort}
              alt="up arrow and down arrow"
            />
          </li>
          <li className="warehousedetails-topbar__qty">
            {" "}
            QUANTITY{" "}
            <img
              className=" warehousedetails-topbar__sort"
              src={Sort}
              alt="up arrow and down arrow"
            />
          </li>

          <li className="warehousedetails-topbar__actions">
            ACTIONS{" "}
            <img
              className="warehousedetails-topbar__sort"
              src={Sort}
              alt="up arrow and down arrow"
            />
          </li>
        </ul>
        {this.state.inventory.map((item) => {
          if (item.status === "Out of Stock") {
            stockDecide =
              "warehousedetails__warehouse-status warehousedetails__warehouse-status--outstock";
          } else {
            stockDecide =
              "warehousedetails__warehouse-status warehousedetails__warehouse-status--instock";
          }
          return (
            <div key={item.id}>
              <div className="warehousedetails__information">
                <div className="warehousedetails__information-data">
                  <div className="warehousedetails__information-top">
                    <div className="warehousedetails__information-item">
                      <h4 className="warehousedetails__subheader">
                        INVENTORY ITEM
                      </h4>
                      <Link
                        to={`/inventory/${item.id}`}
                        className="warehousedetails__itemname"
                      >
                        <p>{item.itemName}</p>{" "}
                        <img
                          className="warehousedetails__chevron"
                          src={Chevron}
                          alt="trashcan"
                        />
                      </Link>
                    </div>
                    <div className="warehousedetails__information-category">
                      <h4 className="warehousedetails__subheader">CATEGORY</h4>
                      <p className="warehousedetails__category-details">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="warehousedetails__information-bottom">
                    <div className="warehousedetails__information-status">
                      <h4 className="warehousedetails__subheader">STATUS</h4>

                      <p className={stockDecide}> {item.status}</p>
                    </div>
                    <div className="warehousedetails__information-quantity-information">
                      <h4 className="warehousedetails__subheader">QTY</h4>
                      <p className="warehousedetails__warehouse-info">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="warehousedetails__actions">
                  <img
                    id={item.id}
                    name={item.itemName}
                    className="inventory__action-trash"
                    src={Trash}
                    alt="trashcan"
                    onClick={this.onTrashHandler}
                  />
                  <Link to={`/edit/inventory/${item.id}`}>
                    <img
                      className="warehousedetails__action-edit"
                      src={Edit}
                      alt="edit"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <DelModal
          show={this.state.show}
          onCloseHandler={this.onCloseHandler}
          onDeleteHandler={this.onDeleteHandler}
          itemId={this.state.itemId}
          itemName={this.state.itemName}
        />
      </section>
    );
  }
}
export default WarehouseDetails;
