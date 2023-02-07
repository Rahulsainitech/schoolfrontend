import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AdminNav = () => {
  const url = "/admin";
  return (
    <>
      <div>
        <h4 className="text-center py-2">Admin Pannel</h4>
        <ButtonGroup
          aria-label="Basic example"
          className="text-center py-2 d-block"
        >
          <NavLink to={`${url}`}>
            <Button variant="outline-primary">All Faculty</Button>
          </NavLink>
          <NavLink to={`${url}/gallery`}>
            <Button variant="outline-secondary">Gallery</Button>
          </NavLink>
          <NavLink to={`${url}/news`}>
            <Button variant="outline-success">News and Events</Button>
          </NavLink>
          <NavLink to={`${url}/faq`}>
            <Button variant="outline-info">Faq Q/A</Button>
          </NavLink>
          <NavLink to={`${url}/studentlist`}>
            <Button variant="outline-success">Students</Button>
          </NavLink>
          <NavLink to={`${url}/timetable`}>
          <Button variant="outline-info">Time-Table</Button>
          </NavLink>
          
          <Button variant="outline-primary">Left</Button>
          <Button variant="outline-secondary">Middle</Button>
          <Button variant="outline-success">Right</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default AdminNav;
