import React, { Component } from "react"
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux';

import { getShowRegisterDialogAction } from '../actions/RegistrationActions'

class RegisterButton extends Component {

    constructor(props) 
    {
        super(props);
        this.showRegisterDialog = this.showRegisterDialog.bind(this);
    }

    showRegisterDialog() {
        const dispatch = this.props.dispatch;
        dispatch(getShowRegisterDialogAction())
    }

    render() {
        return (
            <div>
                <Button id="RegisterOpenDialogButton" variant="light" onClick={this.showRegisterDialog}>
                    User anlegen
                </Button>
            </div>
        )
    }
}

export default connect()(RegisterButton)