import React, { Component } from "react";
import { connect } from 'react-redux';
<<<<<<< HEAD
import { bindActionCreators } from 'redux';
import {Link} from "react-router-dom";

=======
import { bindActionCreators } from 'redux'
>>>>>>> frontend
import * as authenticationActions from '../actions/AuthenticationActions'

const mapStateToProps = state => {
    return state;
}

class UserSessionWidget extends Component {

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

    handleShow(e) {
        e.preventDefault();
        this.setState({ openModal: true })
        const { showLoginDialogAction } = this.props;
        showLoginDialogAction();
    }

    handleClose(e) {
        const { hideLoginDialogAction } = this.props;
        hideLoginDialogAction();
        this.setState({ openModal: false });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userID, password } = this.state;
        const { authenticateUserAction } = this.props;
        authenticateUserAction(userID, password);

        this.setState({ openModal: false });
    }

    render() {

        var showDialog = this.props.showLoginDialog;
        if (showDialog === undefined) {
            showDialog = false;
        }

        return (
            <div>
                <Link  onClick={this.handleShow} to="">
                    Login
                </Link>

                {this.state.openModal &&

                    <div id="containerLog">
                        <div id="bg-Blurred"></div>
                        <div id="div-log-form">
                            <form id="log-form">
                                <div id="div-wrap-head">
                                    <img
                                        id="log-span-img"
                                        src="composition.png"
                                        alt="composition.png"
                                    />
                                    <div id="div-log-span-text">
                                        <span id="log-span-text">
                                            <h2>Willkommen, Reisender!</h2>
                                        </span>
                                        <span id="log-span-text">
                                            <h3>Melde dich an:</h3>
                                        </span>
                                    </div>
                                </div>

                                <div id="wrap-input">
                                    <div id="wrap-input-UN">
<<<<<<< HEAD
                                        <input type="text" id="LoginUserIDInput" placeholder="Benutzername" name="userID" onChange={this.handleChange}></input>
=======
                                        <input id="LoginUserIDInput" type="text" placeholder="Benutzername" name="userID" onChange={this.handleChange}></input>
>>>>>>> frontend
                                    </div>
                                    <div id="wrap-input-PW">
                                        <input id="LoginPasswordInput" type="password" placeholder="Passwort" name="password" onChange={this.handleChange} ></input>
                                    </div>
                                </div>

                                <div id="div-log-btn">
                                    <button id="log-btn" onClick={this.handleSubmit}>Los Gehts</button>
                                </div>
<<<<<<< HEAD

=======
>>>>>>> frontend
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showLoginDialogAction: authenticationActions.getShowLoginDialogAction,
    hideLoginDialogAction: authenticationActions.getHideLoginDialogAction,
    authenticateUserAction: authenticationActions.authenticateUser
}, dispatch)

const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(UserSessionWidget);

export default ConnectedUserSessionWidget
