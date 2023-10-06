import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { MdSportsVolleyball, MdComputer } from "react-icons/md";
import { BiBus } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { BsBank } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import "../../styles/App.css";

const Facilities = () => {
  return (
    <Container className="facility my-5">
      <h4 className="text-center" style={{paddingTop:"7px"}}>OUR EXCELLENCE</h4>
      <p className="text-center">
        Where children learn with fun and that too in a large measure
      </p>
      <hr/>
      <Row className="">
      <Col
        md={5}
        xs={12}
        className="d-flex justify-content-center align-content-center flex-wrap mainlogin"
        style={{ "min-height": "60vh" }}
      >
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <ImLab />
            </Card.Title>
            <Card.Title className="text-center">Advance Lab</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <BsBank />
            </Card.Title>
            <Card.Title className="text-center">
              Interactive Classroom
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <MdComputer />
            </Card.Title>
            <Card.Title className="text-center">Atal Lab</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <FaUsers />
            </Card.Title>
            <Card.Title className="text-center">Top Facility</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <MdSportsVolleyball />
            </Card.Title>
            <Card.Title className="text-center">Sports </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "10rem", height: "10rem" }}
          className="m-1 f-card"
        >
          <Card.Body>
            <Card.Title className="mb-2 fs-1 text-center">
              <BiBus />
            </Card.Title>
            <Card.Title className="text-center">Transport Facility</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={7} xs={12}>
        <h5 className="text-center mt-3">Strive for Success</h5>
        <article className="p-4">
          <strong>Sunrise Public Sr. Secondary School </strong>is not just a place of education;
          it's a vibrant hub of opportunities designed to nurture holistic
          development in every child. Our state-of-the-art facilities, including
          well-equipped labs, efficient transportation, and a thriving sports
          program, create an environment where students can explore, learn, and
          excel in various aspects of their lives. Our dedicated and top-notch
          faculty members are the backbone of our institution, consistently
          guiding and inspiring students to reach their full potential. It's no
          surprise that our school boasts a track record of consistently
          producing excellent academic results. At Sunrise Public Sr. Secondary
          School, we are committed to providing a comprehensive educational
          experience that goes beyond the classroom, preparing students for a
          bright and successful future.
        </article>
      </Col>
      </Row>
    </Container>
  );
};

export default Facilities;
