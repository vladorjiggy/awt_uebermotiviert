import React, {Component} from "react";

import {connect} from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


import UserSessionWidget from './UserSessionWidget';
import LogoutButton from './LogoutButton'
import {Link} from "react-router-dom"

const mapStateToProps = state => {
  return state;
}


class TopMenu extends Component {

  render() {

    const user = this.props.user;

    let userManagement;
    let createPost;

    if (user) {
      
      userManagement = <Nav.Link as={Link} to="/userManagement" id="OpenUserManagementButton">
        User Anelegen
      </Nav.Link>
      createPost = <Nav.Link as={Link} to="/createPost" id="OpenCreatePostButton">
      Create Post
    </Nav.Link>
    
    }



    return (

      
      <header id="header">
      <div id="div-header">
        <div id="div-branding" onClick={() => { this.routeHome()}}>
          <h1>The Traveller's Chant</h1>
          <h5>I havn't been everywhere. But it's on my list.</h5>
        </div>

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
        <UserSessionWidget />
        </div>
      </div>
      
    </header>
    )
  }
}

export default connect(mapStateToProps)(TopMenu);