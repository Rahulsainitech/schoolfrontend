import React from "react";
import { Button, Card,Col } from "react-bootstrap";
import { MdSportsVolleyball } from "react-icons/md";
import { BiBusSchool } from "react-icons/bi";
import { BiSolidBank } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "../../styles/App.css";

const Facilities = () => {
  return (
    <div className="my-5">
      <h5 className="text-center">OUR EXCELLENCE</h5>
      <h6 className="text-center">
        Where children learn with pleasure and that too in a large measure
      </h6>
      <Col md={6} xs={12}
        className="d-flex justify-content-center align-content-center flex-wrap mainlogin"
        style={{ "min-height": "60vh" }}
      >
        {/* <Card style={{ width: "10rem", height: "10rem" }} className="mx-2">
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <BiBusSchool />
            </Card.Title>
            <Card.Title className="text-center">Faculty Login</Card.Title>
            <NavLink to={"/facultylogin"} className="nostyle">
              <Button className="d-block my-3 mx-auto " variant="outline-info">
                Click here
              </Button>
            </NavLink>
            <NavLink to={"/facultyregister"} className="nostyle">
              {" "}
              <Card.Link className="nostyle">
                Don't have an Account? Click here...
              </Card.Link>
            </NavLink>
          </Card.Body>
        </Card>
        <Card style={{  width: "10rem", height: "10rem" }} className="mx-2">
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <BiSolidBank />
            </Card.Title>
            <Card.Title className="text-center">Faculty Login</Card.Title>
            <NavLink to={"/facultylogin"} className="nostyle">
              <Button className="d-block my-3 mx-auto " variant="outline-info">
                Click here
              </Button>
            </NavLink>
            <NavLink to={"/facultyregister"} className="nostyle">
              {" "}
              <Card.Link className="nostyle">
                Don't have an Account? Click here...
              </Card.Link>
            </NavLink>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem", height: "10rem" }} className="mx-2">
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <BiSolidBank />
            </Card.Title>
            <Card.Title className="text-center">Faculty Login</Card.Title>
            <NavLink to={"/facultylogin"} className="nostyle">
              <Button className="d-block my-3 mx-auto " variant="outline-info">
                Click here
              </Button>
            </NavLink>
            <NavLink to={"/facultyregister"} className="nostyle">
              {" "}
              <Card.Link className="nostyle">
                Don't have an Account? Click here...
              </Card.Link>
            </NavLink>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem", height: "10rem" }} className="mx-2">
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <MdSportsVolleyball />
            </Card.Title>
            <Card.Title className="text-center">Sports </Card.Title>
            <NavLink to={"/studentlogin"} className="nostyle">
              {" "}
              <Button className="d-block my-3 mx-auto" variant="outline-info">
                click here
              </Button>
            </NavLink>
            <NavLink to={"/studentregister"} className="nostyle">
              {" "}
              <Card.Link className="nostyle">
                Don't have an Account? Click here...
              </Card.Link>
            </NavLink>
          </Card.Body>
        </Card> */}
      </Col>
      <Col></Col>
    </div>
  );
};

export default Facilities;
