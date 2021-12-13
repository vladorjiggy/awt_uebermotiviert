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
            password: ''
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow(e)
    {
        e.preventDefault();
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
                <Button variant="primary" className="button" onClick={this.handleShow}>
                    Login
                </Button>

                <Modal show={showDialog} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicUserID"> 
                                <Form.Label>UserID</Form.Label>
                                <Form.Control id="LoginUserIDInput" type="text" placeholder="Enter userID" name="userID" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="LoginPasswordInput" type="password" placeholder="Enter password" name="password" onChange={this.handleChange} />
                            </Form.Group>

                            <Button id="LoginButton" variant="primary" type="submit" className="button" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        Passwort vergessen?
                    </Modal.Footer>
                </Modal>
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