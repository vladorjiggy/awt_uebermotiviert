<div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/"></Nav.Link>
                {userManagement}
              <Nav.Link as={Link} to="/"></Nav.Link>
                {createPost}
              </Nav>
              <UserSessionWidget />
              <LogoutButton />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>



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