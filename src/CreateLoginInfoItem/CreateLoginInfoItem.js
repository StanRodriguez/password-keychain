import React, { Component } from "react";
import LoginItemForm from "../LoginItemForm/LoginItemForm.js";
import "./CreateLoginInfoItem.css";
import axios from "axios";

const AES = require("crypto-js/aes");
const { REACT_APP_SALT } = process.env;

class CreateLoginInfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingForm: false,
      newLoginInfoItem: {
        userId: "",
        serviceId: "",
        sub_username: "",
        sub_password: ""
      },
      services: [],
      selectedService: {}
    };
  }

  toggleShowForm = () => {
    this.setState(prevState => ({ isShowingForm: !prevState.isShowingForm }));
  };

  getServices = async () => {
    const response = await axios.get("http://localhost:4567/services");
    this.setState({
      services: response.data
    });
  };

  handleTextChange = event => {
    const element = event.target;
    const { name, value } = element;

    this.setState(prevState => {
      prevState.newLoginInfoItem[name] = value;
      return prevState;
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    let infoItemCopy = { ...this.state.newLoginInfoItem };
    infoItemCopy.sub_password = AES.encrypt(
      infoItemCopy.sub_password,
      REACT_APP_SALT
    ).toString();
    const request = infoItemCopy;
    await axios.post("http://localhost:4567/login_info", request);
    this.setState(prevState => {
      prevState.newLoginInfoItem.sub_username = "";
      prevState.newLoginInfoItem.sub_password = "";
      prevState.selectedService = {};
      prevState.isShowingForm = false;
      return prevState;
    });
    this.props.refresh();
  };

  handleDropdownChange = selectedService => {
    this.setState({ selectedService: selectedService });
    this.setState(prevState => {
      prevState.newLoginInfoItem.serviceId = selectedService.value;
    });
  };

  componentDidMount() {
    this.getServices();
    this.setState(prevState => {
      prevState.newLoginInfoItem.userId = this.props.userId;
      return prevState;
    });
  }

  render() {
    const showFormStyle = {
      height: "350px"
    };
    const hideFormStyle = {
      height: "100px"
    };
    const plusSignShowForm = {
      fontSize: "30px",
      color: "gray"
    };
    const plusSignHideForm = {
      fontSize: "60px",
      color: "black"
    };
    return (
      <div
        className="newButton"
        style={this.state.isShowingForm ? showFormStyle : hideFormStyle}
      >
        <div
          className="plus-sign"
          onClick={this.toggleShowForm}
          style={this.state.isShowingForm ? plusSignShowForm : plusSignHideForm}
        >
          +
        </div>
        {this.state.isShowingForm ? (
          <LoginItemForm
            services={this.state.services}
            isShowingForm={this.state.isShowingForm}
            handleTextChange={this.handleTextChange}
            handleDropdownChange={this.handleDropdownChange}
            sub_username={this.state.newLoginInfoItem.sub_username}
            sub_password={this.state.newLoginInfoItem.sub_password}
            selectedService={this.state.selectedService}
            handleFormSubmit={this.handleFormSubmit}
          />
        ) : null}
      </div>
    );
  }
}

export default CreateLoginInfoItem;
