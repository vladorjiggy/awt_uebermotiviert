import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom"

import UserSessionWidget from './UserSessionWidget';
import LogoutButton from './LogoutButton'

const mapStateToProps = state => {
  return state;
}


class TopMenu extends Component {

  render() {

    const user = this.props.user;

    let loginLogout;

    if (user) {
      loginLogout = <LogoutButton />
    }
    else {
      loginLogout = <UserSessionWidget />
    }

    return (

      <header id="header">
        <div id="div-header">
          <Link className="nav-link" to="/">
            <div id="div-branding">
              <h1>The Traveller's Chant</h1>
              <h5>I havn't been everywhere. But it's on my list.</h5>
            </div>
          </Link>


          <div id="div-search">
            <input
              id="div-search-input"
              type="text"
              placeholder="Wonach suchst du?"
            />
            <button id="div-search-button"></button>
            <img
              id="div-search-image"
              src="search.png"
              alt="search.png"
            />

          </div>
          
          <div id="div-log">
          <Link id="read-more-link" to={"/dashboard"}>Dashboard</Link>
          {loginLogout}
          </div>
        </div>

      </header>
    )
  }
}

export default connect(mapStateToProps)(TopMenu);