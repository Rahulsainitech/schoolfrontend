import React from "react";
import Logo from "../styles/logo.png";
import "../styles/App.css";
import { Col, Row } from "react-bootstrap";

const PreNav = () => {
  return (
    
        <Row className="prenav">
          <Col className="pre p-sm-0 mx-sm-0" xs={3} md={3}>
            <img src={Logo} alt="logo"  />
          </Col>
          <Col className="pre" xs={9} md={6}>
            <h2 className="text-center">
              Sunrise Public Sr. Secondary School
              <br />{" "}
              <span className="col-12 text-center">
                {" "}
                We believe in excellence
              </span>
            </h2>
          </Col>
          <Col className="pre" xs={0} md={3}>
            <address>
              <span>
                <i className="fas fa-phone-square-alt"></i>Contact us
              </span>
              <br />
              Agon,Firozepur Jhirka
              <br />
              Mewat,Haryana,122104
              <br />
              Phone:9991304077
              <br />
              Email:spsssagon@gmail.com
            </address>
          </Col>
        </Row>
      
  );
};

export default PreNav;
