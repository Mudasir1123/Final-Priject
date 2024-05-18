import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Style from './Navbar.module.css'
function CustomNavbar() {
  return (
    <>
    <Navbar className={Style.Navbar} bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={Style.nav} id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#moments">Moments</Nav.Link>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="#messages">Messages</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Twitter"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="primary" className={Style.button}>Tweet</Button>
        </Navbar.Collapse>

    </Navbar>
    </>
  );
}

export default CustomNavbar;
