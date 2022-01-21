import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authenticationActions from "../actions/AuthenticationActions";
import {Link} from "react-router-dom";

const mapStateToProps = (state) => {
  return state;
};

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <Link
          id="LogoutLink"
          onClick={() => {
            this.props.logoutAction();
          }}
        to ="">
          Logout
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logoutAction: authenticationActions.logoutUser,
    },
    dispatch
  );

const connectedLogout = connect(mapStateToProps, mapDispatchToProps)(LogoutButton)

export default connectedLogout
