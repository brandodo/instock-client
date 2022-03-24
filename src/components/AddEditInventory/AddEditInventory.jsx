import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import ItemAvailability from "./ItemAvailability/ItemAvailability.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import axios from "axios";
import "./AddEditInventory.scss";
import DelModal from "../Delmodal/DelModal.jsx";

export default class AddEditInventory extends Component {
  state = {
    isAdd: true,
    showQuantity: true,
    inventoryData: [],
    itemName: "",
    itemDescription: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse: "",
    redirect: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const isAdd = match.url.includes("add");
    let temp = [];

    await axios.get("http://localhost:8080/inventory").then((res) => {
      this.setState({ inventoryData: [...res.data] });
      temp = [...res.data];
    });

    if (!isAdd) {
      const { id } = match.params;
      const [currentItem] = temp.filter((item) => item.id === id);

      const {
        itemName,
        description,
        category,
        status,
        quantity,
        warehouseName,
      } = currentItem;

      this.setState({
        isAdd: false,
        currentItem: currentItem,
        itemName: itemName,
        itemDescription: description,
        category: category,
        status: status,
        quantity: quantity,
        warehouse: warehouseName,
      });

      if (status.toLowerCase() === "out of stock") {
        this.setState({ showQuantity: false });
      }
    }
  }

  render() {
    const handleChange = (event) => {

      if (event.target.name === "status") {
        event.target.value === "inStock"
          ? this.setState({ status: "In Stock", showQuantity: true })
          : this.setState({
              status: "Out of Stock",
              showQuantity: false,
              quantity: 0,
            });
      } else {
        this.setState({ [event.target.name]: event.target.value });
      }
    };

    const handleForm = (event) => {
      event.preventDefault();
      const { id } = this.props.match.params;
      this.state.isAdd ? addInventory() : editInventory(id);
    };

    const addInventory = () => {
      axios
        .post("http://localhost:8080/inventory/add", {
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          category: this.state.category,
          status: this.state.status,
          quantity: this.state.quantity,
          warehouse: this.state.warehouse,
        })
        .then(() => {
          this.setState({ redirect: true });
        });
    };

    const editInventory = (inventoryId) => {
      axios
        .put(`http://localhost:8080/inventory/edit/${inventoryId}`, {
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          category: this.state.category,
          status: this.state.status,
          quantity: this.state.quantity,
          warehouse: this.state.warehouse,
        })
        .then(() => {
          this.setState({ redirect: true });
        });
    };

    const disableButton =
      !this.state.itemName ||
      !this.state.itemDescription ||
      !this.state.category ||
      !this.state.warehouse ||
      (this.state.quantity <= 0 && this.state.status === "In Stock");

    return (
      <form
        className="inventoryDetails__form"
        onSubmit={(event) => handleForm(event)}
      >
        <DelModal />
        <div className="inventoryDetails__container">
          <Link to="/inventory">
            <img
              className="inventoryDetails__back"
              src={backArrow}
              alt="back-nav"
            />
          </Link>
          <h1 className="inventoryDetails__header">
            {this.state.isAdd
              ? "Add New Inventory Item"
              : "Edit Inventory Item"}
          </h1>
        </div>
        <hr></hr>
        <div className="inventoryDetails__body">
          <ItemDetails
            isAdd={this.state.isAdd}
            itemName={this.state.itemName}
            itemDescription={this.state.itemDescription}
            category={this.state.category}
            handleChange={handleChange}
            data={this.state.inventoryData}
          />
          <hr></hr>
          <ItemAvailability
            isAdd={this.state.isAdd}
            showQty={this.state.showQuantity}
            status={this.state.status}
            quantity={this.state.quantity}
            warehouse={this.state.warehouse}
            handleChange={handleChange}
            data={this.state.inventoryData}
          />
        </div>
        <div className="inventoryDetails__btn-container">
          <Link to="/inventory" className="inventoryDetails__link ">
            <button className="inventoryDetails__cancel">Cancel</button>
          </Link>
          <button
            className={`inventoryDetails__submit ${
              disableButton
                ? "inventoryDetails__submit-disabled"
                : "inventoryDetails__submit-hover"
            }`}
            disabled={disableButton ? true : false}
          >
            {this.state.isAdd ? "+ Add Item" : "Save"}
          </button>
        </div>
      </form>
    );
  }
}
