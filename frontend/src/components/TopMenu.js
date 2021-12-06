import React, { Component } from "react";

import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
// import  NavDropdown  from "react-bootstrap/NavDropdown";
import  Container  from "react-bootstrap/Container";  // unnötig, schon oben importiert?

class TopMenu extends Component {
    render() {
      return(
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
              <Container>
                <Navbar.Brand href="#home">Traveller's chant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Über uns</Nav.Link>
                  <Nav.Link href="#link">Kontakt</Nav.Link>
                  <Nav.Link href="#link">Impressum</Nav.Link>
                  {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>*/}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
    }
}

export default TopMenu