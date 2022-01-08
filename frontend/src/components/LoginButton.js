<<<<<<< HEAD
import React, {Component} from "react";

import {connect} from 'react-redux';

import{getShowLoginDialogAction} from '../actions/AuthenticationActions'

import Button from 'react-bootstrap/Button'

class LoginButton extends Component{

    constructor(props){
=======
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux';

import {getShowLoginDialogAction} from '../actions/AuthenticationActions'

class LoginButton extends Component{

    constructor(props)
    {
>>>>>>> 1dded973f09bff94996a0ba280e43d14cdb3bced
        super(props);
        this.showLoginDialog = this.showLoginDialog.bind(this);
    }

    showLoginDialog() {
        const dispatch = this.props.dispatch;
        dispatch(getShowLoginDialogAction())
    }

    render(){
        return(
            <div>
<<<<<<< HEAD
               <Button id="LoginOpenDialogButton" type="button" variant="light" onClick={this.showLoginDialog}>Login</Button>
=======
               {/*<button type="button" class="btn btn-outline-light" onClick={this.showLoginDialog}>Login</button>*/}
                <Button id="LoginOpenDialogButton" variant="light"  onClick={this.showLoginDialog}>
                    Login
                </Button>
>>>>>>> 1dded973f09bff94996a0ba280e43d14cdb3bced
            </div>
        )
    }
}

export default connect()(LoginButton)