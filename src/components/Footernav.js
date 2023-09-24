import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
import { AiFillHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { GoSignIn } from "react-icons/go";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { TiLocationArrow } from "react-icons/ti";
import { SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

const Footernav = () => {
  return (
    <div className="foot py-5">
      <Container className="text-white">
        <Row>
          <Col xs={6} md={3}>
            <li>
              <NavLink to={"/"}>
                <AiFillHome />
                &nbsp;Home&nbsp;
                <TiLocationArrow />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>
                <FaSchool />
                &nbsp;About Us&nbsp;
                <TiLocationArrow />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                <FaPhoneVolume />
                &nbsp;Contact&nbsp;
                <TiLocationArrow />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/gallery"}>
                <GrGallery />
                &nbsp;Gallery&nbsp;
                <TiLocationArrow />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/mainlogin"}>
                <GoSignIn />
                &nbsp;Login&nbsp;
                <TiLocationArrow />
              </NavLink>
            </li>
          </Col>
          <Col xs={6} md={3}>
            <li>
              <NavLink to={"/onlinefee"} className="rstyle">
                <span>
                  Online fee <HiOutlineArrowTopRightOnSquare />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/result"}>
                Result <HiOutlineArrowTopRightOnSquare />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/alumni"}>
                Our Alumani <HiOutlineArrowTopRightOnSquare />
              </NavLink>
            </li>
            <Row>
              <Col md={6} xs={8}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                  className="mt-4"
                >
                  <span>
                    <SiFacebook />
                  </span>
                  <span>
                    <GrInstagram />
                  </span>
                  <span>
                    <ImWhatsapp />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <iframe
              width="600"
              height="200"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sunrise%20Public%20Sr.%20Sec.%20School%20Agon,%20Unnamed%20Road,%20Haryana%20122104+(Sunrise%20Public%20school)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population Estimator map
              </a>
            </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footernav;
