import React, {Component} from "react";

import {connect} from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


import UserSessionWidget from './UserSessionWidget';

import {Link} from "react-router-dom"

const mapStateToProps = state => {
  return state;
}


class TopMenu extends Component {

  render() {

    const user = this.props.user;

    let userManagement;

    if (user) {
      userManagement = <Nav.Link as={Link} to="/userManagement" id="OpenUserManagementButton">
        User Anelegen
      </Nav.Link>
    }

    return (

      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {userManagement}
              </Nav>
              <UserSessionWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TopMenu);