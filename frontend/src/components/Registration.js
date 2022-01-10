import React, { Component } from "react"
import { connect } from "react-redux"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import * as registrationActions from '../actions/RegistrationActions'
import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    return state;
}

class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userID: ``,
            password: ``
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow(e) {
        e.preventDefault();
        /*this.setState({show: true})*/
        const { showRegisterDialogAction } = this.props;
        showRegisterDialogAction();
    }

    handleClose() {
        /*this.setState({show: false})*/
        const { hideRegisterDialogAction } = this.props;
        hideRegisterDialogAction();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userID, userName,password } = this.state;
        const { registerUserAction } = this.props;
        registerUserAction(userID, userName, password);
        console.log("Pushed submit")
        this.setState({
            userID:"",
            userName: "",
            password: ""
        })
    }

    render() {

        var showDialog = this.props.showRegisterDialog;
        if (showDialog === undefined) {
            showDialog = false;
        }

        return (
            <div>
                <Modal show={showDialog} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control id="UserIDInput" type="text" placeholder="Enter Username" name='userID' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>Username</Form.Label>
                                <Form.Control id="UserNameInput" type="text" placeholder="Enter Username" name='userName' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="PasswordInput" type="password" placeholder="Password" name='password' onChange={this.handleChange} />
                            </Form.Group>
                            <Button id="CreateUserButton" variant="primary" type="submit" onClick={this.handleSubmit}>
                                Create User
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showRegisterDialogAction: registrationActions.getShowRegisterDialogAction,
    hideRegisterDialogAction: registrationActions.getHideRegisterDialogAction,
    registerUserAction: registrationActions.registerUser,
}, dispatch)

const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default ConnectedUserSessionWidget