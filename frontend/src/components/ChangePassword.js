import React, { Component } from "react";

import {Link} from "react-router-dom";

class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: ``,
      newPassword: ``,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;
    this.editPassword(oldPassword, newPassword);
  }

  editPassword(oldPassword, newPassword) {
    const url = process.env.REACT_APP_SERVERHOST + "/user/changePassword"
    fetch(url, {
      method: "put",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
    .then((result) => result.json())
    .then((result) => {
        this.setState({
          openModal: false,
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
    this.setState({ openModal: true })
  }

  handleClose(e) {
    this.setState({ openModal: false });
  }

  render() {
    return (

      <div>
        <Link className="changePasswordLink" onClick={this.handleShow} to="">
          Passwort ändern
        </Link>

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
                  <img
                    id="NP-span-img"
                    src="passwort.png"
                    alt="password.png"
                  />

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
                      name="oldPassword"
                      placeholder="altes Passwort"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div id="wrap-input-CNP">
                    <input
                      id="input-CNP"
                      type="password"
                      name="newPassword"
                      placeholder="neues Passwort"
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
