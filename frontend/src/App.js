import React, { Component } from 'react';
import './App.css';

<<<<<<< HEAD
import TopMenu from './components/TopMenu';
import PublicPage from './components/PublicPage';
import PrivatePage from './components/PrivatePage';

import { connect } from 'react-redux';

=======
import { connect } from 'react-redux';

import TopMenu from './components/TopMenu';
import TopMenuLoggedIn from './components/TopMenuLoggedIn';
import PublicPage from './components/PublicPage';
import PrivatePage from './components/PrivatePage';
>>>>>>> f1cbc4a137ccd37368c89956e7efd1697b42d180

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