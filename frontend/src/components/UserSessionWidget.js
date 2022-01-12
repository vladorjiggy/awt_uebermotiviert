import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import * as authenticationActions from '../actions/AuthenticationActions'


const mapStateToProps = state => {
    return state;
}

class UserSessionWidget extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            userID: '',
            password: '',
            openModal: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow(e)
    {
        e.preventDefault();
        this.setState({openModal: true})
        //this.setState({show: true})
        const { showLoginDialogAction } = this.props;
        showLoginDialogAction();
    }

    handleClose(e)
    {
        //this.setState({show: false})
        const { hideLoginDialogAction } = this.props;
        hideLoginDialogAction();
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({ [name]: value})
        console.log(JSON.stringify(this.state))
    }

    handleSubmit(e){
        e.preventDefault();
        const { userID, password } = this.state;
        const { authenticateUserAction } = this.props;
        authenticateUserAction(userID, password);
        console.log("Pushed Submit");
    }

    render(){

        var showDialog = this.props.showLoginDialog;
        if(showDialog === undefined) {
            showDialog = false;
        }

        return(
            <div>
                {/* Login- & Logout Button switch: Beispielanwendung Folie 44 */}
                <a variant="primary" className="button" onClick={this.handleShow}>
                    Anmelden
                </a>
                {this.state.openModal && 
                    <div id="popup_catsync" class="overlay" >
                    <div class="popup">
                        <h2>Login</h2>
                        <label for="userID">Username</label><br/>
                        <input type="text" id="LoginUserIDInput" type="text" placeholder="Enter userID" name="userID" onChange={this.handleChange}></input>
                        <label for="password">Passwort</label><br/>
                        <input id="LoginPasswordInput" type="password" placeholder="Enter password" name="password" onChange={this.handleChange} ></input>
                        <input id="LoginButton" type="submit" onClick={this.handleSubmit}></input>
                    </div>
                </div>
                }
                

                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showLoginDialogAction: authenticationActions.getShowLoginDialogAction,
    hideLoginDialogAction: authenticationActions.getHideLoginDialogAction,
    authenticateUserAction: authenticationActions.authenticateUser
}, dispatch)

const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(UserSessionWidget);

export default ConnectedUserSessionWidget
