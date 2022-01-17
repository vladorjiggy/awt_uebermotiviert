import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

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
        //this.setState({show: true})
        const { showLoginDialogAction } = this.props;
        showLoginDialogAction();
    }

    handleClose(e) {
        //this.setState({show: false})
        const { hideLoginDialogAction } = this.props;
        hideLoginDialogAction();
        this.setState( { openModal: false } );
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(JSON.stringify(this.state))
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userID, password } = this.state;
        const { authenticateUserAction } = this.props;
        authenticateUserAction(userID, password);
        console.log("Pushed Submit");
        this.setState( { openModal: false } );
    }

    render() {

        var showDialog = this.props.showLoginDialog;
        if (showDialog === undefined) {
            showDialog = false;
        }

        return (
            <div>
                {/* Login- & Logout Button switch: Beispielanwendung Folie 44 */}
                <a variant="primary" className="button" onClick={this.handleShow}>
                    Login
                </a>
                {this.state.openModal &&

                    <div id="containerLog">
                        <div id="bg-Blurred"></div>
                        <div id="div-log-form">
                            <form id="log-form">
                                <div id="div-wrap-head">
                                    <img
                                        id="log-span-img"
                                        src="composition.png"
                                        alt="search.png"
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
                                        <input type="text" id="LoginUserIDInput" type="text" placeholder="Benutzername" name="userID" onChange={this.handleChange}></input>
                                    </div>
                                    <div id="wrap-input-PW">
                                        <input id="LoginPasswordInput" type="password" placeholder="Passwort" name="password" onChange={this.handleChange} ></input>
                                    </div>
                                </div>

                                <div id="div-log-btn">
                                    <button id="log-btn" onClick={this.handleSubmit}>Los Gehts</button>
                                </div>

                                <div id="div-log-text">
                                    <a href="#" id="div-log-text-a">Password vergessen?</a>
                                </div>
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
