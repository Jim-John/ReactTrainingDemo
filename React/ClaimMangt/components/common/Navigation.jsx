import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import { Link } from "react-router";
import SignOutIcon from "./SignOutIcon.jsx";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  callOnClick() {
    sessionStorage.clear();
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Claims Admin </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link href="#claim" as={Link} to="claim">
              Claim Summary
            </Nav.Link>
            <Nav.Link eventKey="ilink-3">About</Nav.Link>
            <Nav.Link eventKey="ilink-4">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <a
              href="/"
              onClick={this.callOnClick}
              className="mr-sm-2 justify-content-end"
            >
              <SignOutIcon /> LogOut
            </a>
          </Form>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation;
