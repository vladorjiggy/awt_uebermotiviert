import React, { Component } from 'react';
import './App.css';

import TopMenu from './components/TopMenu';
import PublicPage from './components/PublicPage';
import PrivatePage from './components/PrivatePage';
import CreateUser from './components/CreateUser';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return state
}

class App extends Component {

  render() {

    const user = this.props.user

    let workspace;
    let createUser;

    if(user) {
      workspace = <PrivatePage />
      createUser = <CreateUser/>
    }
    else {
      workspace = <PublicPage />
    }

    return (
      <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route exact path = "/" element = {workspace}/>
          <Route exact path = "/UserManagement" element = {createUser}/>
          </Routes>
      </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);