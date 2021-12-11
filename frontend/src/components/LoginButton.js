import React, { Component } from "react";

import {connect} from 'react-redux';

import{getShowLoginDialogAction} from '../actions/AuthenticationActions'

class LoginButton extends Component{

    constructor(props){
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
               <button id="LoginOpenDialogButton" type="button" class="btn btn-outline-light" onClick={this.showLoginDialog}>Login</button>
            </div>
        )
    }
}

export default connect()(LoginButton)