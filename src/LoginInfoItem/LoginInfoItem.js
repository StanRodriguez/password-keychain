import React, { Component } from "react";
import axios from "axios";
import "./LoginInfoItem.css";
const AES = require("crypto-js/aes");
const crypto = require("crypto-js");

const { REACT_APP_SALT } = process.env;

class LoginInfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingDetail: false,
      isEditing: false,
      isDeleted: false,
      editInfo: {
        userId: "",
        serviceId: "",
        userServiceId: "",
        sub_username: "",
        sub_password: ""
      },
      type: "password"
    };
  }

  toggleDetail = () => {
    this.setState(prevState => ({
      isShowingDetail: !prevState.isShowingDetail,
      isEditing: false
    }));
  };

  handleCancelDelete = () => {
    if (this.state.isEditing) {
      this.setState({
        isEditing: false,
        editInfo: {
          userId: this.props.item.user_service.userId,
          serviceId: this.props.item.user_service.serviceId,
          userServiceId: this.props.item.user_service.userServiceId,
          sub_username: this.props.item.user_service.sub_username,
          sub_password: AES.decrypt(
            this.props.item.user_service.sub_password,
            REACT_APP_SALT
          ).toString(crypto.enc.Utf8)
        }
      });
    } else if (!this.state.isEditing) {
      this.handleDelete();
    }
  };

  handleInputChange = event => {
    if (this.state.isEditing) {
      const element = event.target;
      const { name, value } = element;
      this.setState(prevState => {
        prevState.editInfo[name] = value;
        return prevState;
      });
    }
  };

  handleEditOrConfirmChanges = async () => {
    if (!this.state.isEditing) {
      this.setState({
        isEditing: true
      });
    } else if (this.state.isEditing) {
      let request = { ...this.state.editInfo };
      request.sub_password = AES.encrypt(
        request.sub_password,
        REACT_APP_SALT
      ).toString();
      await axios.put("http://localhost:4567/login_info", request);
      await this.setState({
        isEditing: false
      });
    }
  };

  handleDelete = async () => {
    let userServiceId = this.state.editInfo.userServiceId;
    await axios.delete("http://localhost:4567/login_info/" + userServiceId);
    this.setState({
      isDeleted: true
    });
  };

  componentDidMount() {
    this.setState({
      editInfo: {
        userId: this.props.item.user_service.userId,
        serviceId: this.props.item.user_service.serviceId,
        userServiceId: this.props.item.user_service.userServiceId,
        sub_username: this.props.item.user_service.sub_username,
        sub_password: AES.decrypt(
          this.props.item.user_service.sub_password,
          REACT_APP_SALT
        ).toString(crypto.enc.Utf8)
      }
    });
  }
  showHide = () => {
    this.setState(prevState => {
      return {
        type: prevState.type === "password" ? "text" : "password"
      };
    });
  };
  render() {
    let closedStyle = {
      height: "100px",
      backgroundColor: "white"
    };
    let openStyle = {
      height: "300px",
      backgroundColor: "rgba(225,255,209,1)"
    };
    let deletedStyle = {
      height: "0px",
      border: "none",
      margin: "0 auto",
      padding: "0",
      opacity: "0",
      boxShadow: "none"
    };
    let componentStyle;

    if (!this.state.isShowingDetail) {
      componentStyle = closedStyle;
    } else if (this.state.isShowingDetail) {
      componentStyle = openStyle;
    }

    if (this.state.isDeleted) {
      componentStyle = deletedStyle;
    }

    return (
      <div className="item" style={componentStyle}>
        <div
          className="item-heading-wrapper"
          onClick={this.toggleDetail}
          style={
            this.state.isShowingDetail
              ? { margin: "20px 10px 10px 10px" }
              : { margin: "50px 10px 10px 10px" }
          }
        >
          <img
            className="logo"
            src={this.props.item.logo}
            alt={"logo"}
            style={
              this.state.isShowingDetail
                ? { border: "3px solid red" }
                : { border: "none" }
            }
          />
          <br />
          <h2 className="item-title">{this.props.item.title}</h2>
        </div>
        <div
          className="item-detail-wrapper"
          style={
            this.state.isShowingDetail ? { opacity: "1" } : { opacity: "0" }
          }
        >
          username:
          <input
            className="edit-input"
            type="text"
            name="sub_username"
            onChange={this.handleInputChange}
            value={this.state.editInfo.sub_username}
          />
          <br />
          <div className="password-wrapper">
            password:
            <input
              className="edit-input"
              type={this.state.type}
              name="sub_password"
              onChange={this.handleInputChange}
              value={this.state.editInfo.sub_password}
            />
            <br />
            <button
              type="button"
              className="btn btn-success"
              onMouseDown={this.showHide}
              onMouseUp={this.showHide}
            >
              show
            </button>
          </div>
          <br />
        </div>

        <div
          className="button-wrapper"
          style={
            this.state.isShowingDetail ? { opacity: "1" } : { opacity: "0" }
          }
        >
          <div
            className="edit-button"
            onClick={this.handleEditOrConfirmChanges}
          >
            {this.state.isEditing ? "Confirm" : "Edit"}
          </div>
          <div className="delete-button" onClick={this.handleCancelDelete}>
            {this.state.isEditing ? "Cancel" : "Delete"}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginInfoItem;
