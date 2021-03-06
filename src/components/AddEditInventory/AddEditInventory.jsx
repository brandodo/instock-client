import React, { Component } from "react";
import { Snackbar, Slide, Alert } from "@mui/material";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import ItemAvailability from "./ItemAvailability/ItemAvailability.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { API_URL } from "../../utils/utils";
import axios from "axios";
import "./AddEditInventory.scss";

export default class AddEditInventory extends Component {
  state = {
    isAdd: true,
    showQuantity: true,
    inventoryData: [],
    warehouseData: [],
    itemName: "",
    itemDescription: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse: "",
    open: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const isAdd = match.url.includes("add");
    let temp = [];

    await axios.get(`${API_URL}/inventory`).then((res) => {
      this.setState({ inventoryData: [...res.data] });
      temp = [...res.data];
    });

    await axios.get(`${API_URL}/warehouses`).then((res) => {
      this.setState({ warehouseData: res.data });
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
    const handleChange = (event, warehouseId) => {
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

        if (warehouseId) this.setState({ warehouseId: warehouseId });
      }
    };

    const handleForm = (event) => {
      event.preventDefault();
      const { id } = this.props.match.params;

      this.setState({ open: true });

      setTimeout(() => {
        this.state.isAdd ? addInventory() : editInventory(id);
      }, 2000);
    };

    const addInventory = () => {
      axios
        .post(`${API_URL}/inventory/add`, {
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          category: this.state.category,
          status: this.state.status,
          quantity: this.state.quantity,
          warehouseId: this.state.warehouseId,
          warehouse: this.state.warehouse,
        })
        .then(() => {
          this.props.history.goBack();
        });
    };

    const editInventory = (inventoryId) => {
      axios
        .put(`${API_URL}/inventory/edit/${inventoryId}`, {
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          category: this.state.category,
          status: this.state.status,
          quantity: this.state.quantity,
          warehouse: this.state.warehouse,
        })
        .then(() => {
          this.props.history.goBack();
        });
    };

    const disableButton =
      !this.state.itemName ||
      !this.state.itemDescription ||
      !this.state.category ||
      !this.state.warehouse ||
      (this.state.quantity <= 0 && this.state.status === "In Stock");

    const TransitionDown = (props) => {
      return <Slide {...props} direction="down" />;
    };

    return (
      <form
        className="inventoryDetails__form"
        onSubmit={(event) => handleForm(event)}
      >
        <div className="inventoryDetails__container">
          <img
            className="inventoryDetails__back"
            src={backArrow}
            alt="back-nav"
            onClick={() => this.props.history.goBack()}
          />
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
            data={this.state.warehouseData}
          />
        </div>
        <div className="inventoryDetails__btn-container">
          <button
            className="inventoryDetails__cancel"
            onClick={(event) => {
              event.preventDefault();
              this.props.history.goBack();
            }}
          >
            Cancel
          </button>
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
        <Snackbar
          open={this.state.open}
          TransitionComponent={TransitionDown}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Changes saved! You will be redirected in 2 seconds...
          </Alert>
        </Snackbar>
      </form>
    );
  }
}
