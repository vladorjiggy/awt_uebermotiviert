import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class LogoutButton extends Component {

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render(){
        return(
            <div>
                <Button id="LogoutButton" onClick={this.logout} className="button">
                    Logout
                </Button>
            </div>
        )
    }
}

export default connect()(LogoutButton);