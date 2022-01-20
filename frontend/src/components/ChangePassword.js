import React, { Component } from "react";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // brauchen noch userID
      oldPassword: ``,
      newPassword: ``,
      confirmNewPassword: ``,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getOldPassword();
  }

  getOldPassword() {
    //      WIE/WOHER HOLEN WIR DIE userID?
    //      + im Backend muss die Route einkommentiert und noch im controller etc definiert werden
    const url =
      process.env.REACT_APP_SERVERHOST +
      "/user/get/"; /* + this.props.params.userID */
    fetch(url, {
      method: "get",
    })
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          oldPassword: result.password,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;
    this.editPost(oldPassword, newPassword)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        console.log("New Password  ", newPassword);
      });
  }

  editPassword(oldPassword, newPassword) {
    const url =
      process.env.REACT_APP_SERVERHOST +
      "/user/changePassword" +
      this.props.params.userID;
    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
      .then((result) => result.json())
      .then((result) => {
        console.log("result: ", result);
        this.setState({
          openModal: false,
          _id: ``,
          oldPassword: ``,
          newPassword: ``,
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ openModal: true });
  }

  handleClose(e) {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <div>
        <a className="changePasswordLink" onClick={this.handleShow}>
          Passwort ändern
        </a>

        {this.state.openModal && (
          <div id="containerLog">
            <div id="bg-Blurred"></div>
            <div id="div-NP-form">
              <div id="position-button">
                <button id="close-button" onClick={this.handleClose}>
                  X
                </button>
              </div>
              <form id="log-form">
                <div id="div-wrap-head">
                  <img id="NP-span-img" src="passwort.png" alt="password.png" />
                  <div id="div-NP-span-text">
                    <span id="NP-span-text">
                      <h2>Neues Passwort anlegen:</h2>
                    </span>
                  </div>
                </div>

                <div id="wrap-input">
                  <div id="wrap-input-NP">
                    <input
                      id="input-NP"
                      type="password"
                      name="newPassword"
                      placeholder="neues Passwort"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div id="wrap-input-CNP">
                    <input
                      id="input-CNP"
                      type="password"
                      name="confirmNewPassword"
                      placeholder="bestätige neues Passwort"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div id="div-confirm-btn">
                  <button id="confirm-btn" onClick={this.handleSubmit}>
                    Passwort speichern
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ChangePassword;
