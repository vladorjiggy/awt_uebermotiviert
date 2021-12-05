import React, { Component } from "react";

import {connect} from 'react-redux';



class LoginButton extends Component{

    render(){
        return(
            <div>
               <button type="button" class="btn btn-outline-light" onClick={this.showLoginDialog}>Login</button>
            </div>
        )
    }
}

export default LoginButton