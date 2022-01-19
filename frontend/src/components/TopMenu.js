import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom"

import UserSessionWidget from './UserSessionWidget';
import LogoutButton from './LogoutButton';
import SearchForm from "./SearchForm";

const mapStateToProps = state => {
  return state;
}


class TopMenu extends Component {

  render() {

    const user = this.props.user;

    let loginLogout;
    let dashboard;

    if (user) {
      loginLogout = <LogoutButton />
      dashboard = <Link id="dashboardLink" to={"/dashboard"}>Dashboard</Link>
    }
    else {
      loginLogout = <UserSessionWidget />
    }

    return (

      <header id="header">
        <div id="div-header">

          <Link className="nav-link" to="/">
            <h1>The Traveller's Chant</h1>
          </Link>
          <h5>I havn't been everywhere. But it's on my list.</h5>
        </div>

        <SearchForm />

        <div className="topMenu__links">

          {dashboard}
          {loginLogout}

        </div>



      </header>
    )
  }
}

export default connect(mapStateToProps)(TopMenu);