import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" id="navbar" className="pl-5 pr-5">
      <Navbar.Brand href="#home" className="logo">
        OpenNote
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="  ml-auto">
          <Nav.Link as={NavLink} to="/dashboard" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/dashboard/notification"
            className="text-white"
          >
            Notification
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/dashboard/downloads"
            className="text-white"
          >
            Downloads
          </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/aboutus" className="text-white">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
