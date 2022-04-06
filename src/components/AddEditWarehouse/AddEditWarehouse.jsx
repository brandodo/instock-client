import React, { Component } from "react";
import { Snackbar, Slide, Alert } from "@mui/material";
import WarehouseDetails from "./WarehouseDetails.jsx";
import ContactDetails from "./ContactDetails.jsx";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import "./AddEditWarehouse.scss";
import { API_URL } from "../../utils/utils";
import axios from "axios";

export default class AddEditWarehouse extends Component {
  state = {
    isAdd: true,
    warehouseName: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phone: "",
    email: "",
    open: false,
    formatError: false,
  };

  componentDidMount() {
    const { match } = this.props;
    const isAdd = match.url.includes("add");

    if (!isAdd) {
      const { id } = match.params;

      axios.get(`${API_URL}/warehouses/${id}`).then(({ data }) => {
        const { name, address, city, country, contact } = data;
        const { position, phone, email } = contact;
        const contactName = contact.name;

        this.setState({
          isAdd: false,
          warehouseName: name,
          address,
          city,
          country,
          contactName,
          position,
          phone,
          email,
        });
      });
    }
  }

  render() {
    const { id } = this.props.match.params;

    const handleChange = (event, valid) => {
      const name = event.target.name;

      if ((name === "phone" || name === "email") && !valid) {
        this.setState({
          formatError: true,
          [event.target.name]: event.target.value,
        });
      } else {
        this.setState({
          formatError: false,
          [event.target.name]: event.target.value,
        });
      }
    };

    const handleForm = (event) => {
      event.preventDefault();

      this.setState({ open: true });

      setTimeout(() => {
        this.state.isAdd ? addWarehouse() : editWarehouse(id);
      }, 2000);
    };

    const addWarehouse = () => {
      axios
        .post(`${API_URL}/warehouses/add`, {
          warehouseName: this.state.warehouseName,
          address: this.state.address,
          city: this.state.city,
          country: this.state.country,
          name: this.state.contactName,
          position: this.state.position,
          phone: this.state.phone,
          email: this.state.email,
        })
        .then(() => {
          this.props.history.goBack();
        });
    };

    const editWarehouse = (warehouseId) => {
      axios
        .put(`${API_URL}/warehouses/edit/${warehouseId}`, {
          warehouseName: this.state.warehouseName,
          address: this.state.address,
          city: this.state.city,
          country: this.state.country,
          name: this.state.contactName,
          position: this.state.position,
          phone: this.state.phone,
          email: this.state.email,
        })
        .then(() => {
          this.props.history.goBack();
        });
    };

    const disableButton =
      !this.state.warehouseName ||
      !this.state.address ||
      !this.state.city ||
      !this.state.country ||
      !this.state.contactName ||
      !this.state.position ||
      !this.state.phone ||
      !this.state.email;

    const TransitionDown = (props) => {
      return <Slide {...props} direction="down" />;
    };

    return (
      <form
        className="warehouseDetails__form"
        onSubmit={(event) => handleForm(event)}
      >
        <div className="warehouseDetails__container">
          <img
            className="warehouseDetails__back"
            src={backArrow}
            alt="back-arrow"
            onClick={() => this.props.history.goBack()}
          />
          <h1 className="warehouseDetails__header">
            {this.state.isAdd ? "Add New Warehouse" : "Edit Warehouse"}
          </h1>
        </div>
        <hr></hr>
        <div className="warehouseDetails__body">
          <WarehouseDetails handleChange={handleChange} data={this.state} />
          <hr></hr>
          <ContactDetails handleChange={handleChange} data={this.state} />
        </div>
        <div className="warehouseDetails__btn-container">
          <button
            className="warehouseDetails__cancel"
            onClick={(event) => {
              event.preventDefault();
              this.props.history.goBack();
            }}
          >
            Cancel
          </button>

          <button
            className={`warehouseDetails__submit ${
              disableButton || this.state.formatError
                ? "warehouseDetails__submit-disabled"
                : "warehouseDetails__submit-hover"
            }`}
            disabled={disableButton || this.state.formatError ? true : false}
          >
            {this.state.isAdd ? "+ Add Warehouse" : "Save"}
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
