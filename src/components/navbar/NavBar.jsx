import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">OpenNote</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/dashboard">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/notification">
            Notifications
          </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/downloads">
            Downloads
          </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/aboutus">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
