import React, {Component} from "react";

import {connect} from "react-redux";

import UserSessionWidget from './UserSessionWidget';
import LogoutButton from './LogoutButton'
import CreatePostButton from "./CreatePostButton";

const mapStateToProps = state => {
  return state;
}


class TopMenu extends Component {

  render() {

    const user = this.props.user;

    let loginLogout;
    let createPost;

    if (user) {
      loginLogout = <LogoutButton />
      createPost = <CreatePostButton />
    }
    else{
      loginLogout = <UserSessionWidget />
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
        { createPost }
        { loginLogout }
        <div id="div-log">
       
        </div>
      </div>
      
    </header>
    )
  }
}

export default connect(mapStateToProps)(TopMenu);