import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import PreNav from "./PreNav";
import "../styles/App.css";
import { AiFillHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";
import { GoSignIn } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

const Navbar1 = () => {
  return (
    <>
      <PreNav />
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                <AiFillHome /> &nbsp; Home
              </NavLink>
              <NavDropdown title={"About"} id="basic-nav-dropdown">
                <NavDropdown.Item className="m-0">
                  {" "}
                  <NavLink to="/about/" className="nav-link">
                    <FaSchool />
                    &nbsp;School
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <NavLink to="/about/director" className="nav-link">
                    Director
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <NavLink to="/about/principal" className="nav-link">
                    Principal
                  </NavLink>
                </NavDropdown.Item>
                {/* <hr/> */}
                <NavDropdown.Item>
                  {" "}
                  <NavLink to="/about/teachers" className="nav-link">
                    Teachers
                  </NavLink>
                </NavDropdown.Item>
                {/* <hr/> */}
              </NavDropdown>
              <NavDropdown title={"Gallery"} id="basic-nav-dropdown">
                <NavDropdown.Item className="m-0">
                  {" "}
                  <NavLink to="/gallery" className="nav-link">
                    <RiGalleryLine />
                    &nbsp;Photos
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/gallery" className="nav-link">
                    <RiGalleryLine />
                    &nbsp;Video
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink to="/contact" className="nav-link">
                <MdOutlineContactMail />
                &nbsp;Contact
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                &nbsp;Admissions
              </NavLink>
              <NavLink to="/mainlogin" className="nav-link">
                <GoSignIn /> login
              </NavLink>
              <NavLink to="/admin" className="nav-link">
                <RiAdminLine /> Admin
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
