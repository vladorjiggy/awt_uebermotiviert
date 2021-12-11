import React, { Component } from "react";
import {connect} from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import * as authenticationActions from '../actions/AuthenticationActions'
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
    return state;
}

class UserSessionWidget extends Component{

    constructor(props){ 
        super(props)
        this.state ={ 
          username: '',
          password: ''
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        
    }
    handleShow(e){
        e.preventDefault();
        const {showLoginDialogAction} = this.props;
        showLoginDialogAction();
         /* this.setState({show: true} )*/ 
    }

    handleClose(){
      const {hideLoginDialogAction} = this.props;
        hideLoginDialogAction();
        /*  this.setState({show: false}) */ 
    }

    handleChange(e)
    {
      const {name, value} = e.target;
      this.setState({[name]: value})
      console.log(JSON.stringify(this.state))
    }

    handleSubmit(e){
      e.preventDefault();
      const {username, password} = this.state;
      const {authenticateUserAction} = this.props;
      authenticateUserAction(username, password);
      console.log("pushed submit")
      this.setState({
        username:"",
        password:""
      })
    }

    handleLogout(e){
      e.preventDefault();
      const {logoutAction} = this.props;
      logoutAction();
    }

    render(){
        
        var showDialog = this.props.showLoginDialog;
        var user = this.props.user;

        let button;
        if (user){
          button= <Button id="LogoutButton" variant="primary" onClick={this.handleLogout}>
          Logout
      </Button>
        } else{
          button = <Button variant="primary" onClick={this.handleShow}>
          Login
      </Button>
        }

        return(
            <div>
              {button}
      <Modal show={showDialog} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>User-ID</Form.Label>
                      <Form.Control type="email" id=" LoginUserIDInput" placeholder="Enter User-ID" name="username" onChange={this.handleChange}/>
                  </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id=" LoginPasswordInput" placeholder="Password" name="password" onChange={this.handleChange} />
                    </Form.Group>
                  <Button id="LoginButton" variant="primary" type="submit" onClick={this.handleSubmit}>
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

const mapDispatchProps = dispatch => bindActionCreators({
  showLoginDialogAction : authenticationActions.getShowLoginDialogAction,
  hideLoginDialogAction : authenticationActions.getHideLoginDialogAction,
  authenticateUserAction : authenticationActions.authenticateUser,
  logoutAction : authenticationActions.getUserLogout
},dispatch)

const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchProps)(UserSessionWidget)

export default ConnectedUserSessionWidget
