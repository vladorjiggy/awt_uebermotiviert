import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import TopMenu from './components/TopMenu';
import TopMenuLoggedIn from './components/TopMenuLoggedIn';
import PublicPage from './components/PublicPage';
import PrivatePage from './components/PrivatePage';

const mapStateToProps = state => {
  return state
}

class App extends Component {
  
  render() {

    const user = this.props.user;
    let workspace;
    let topmenu;

    if(user){
      topmenu = <TopMenuLoggedIn/>
      workspace = <PrivatePage /*{...this.props}*/ />
    }
    else{
      topmenu = <TopMenu/>
      workspace = <PublicPage/>
    }

    return (
      <div className="App">
        {topmenu}
        {workspace}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);