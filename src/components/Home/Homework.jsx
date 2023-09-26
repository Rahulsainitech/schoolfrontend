import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import image13 from "../img/3.jpg";
// import image14 from "../img/4.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { getAllFaq } from "../Action/faqAction";
import { getAllNews } from "../Action/newsAction";
// import {Image} from "react-bootstrap"
import CardMenuBox from "./CardMenuBox";
import CarouselFront from "./CarouselFront";
import { Image } from "react-bootstrap";
import OurStudent from "./newsevent/NewsAndEvent";
import { NavLink } from "react-router-dom";
import MissionVision from "../About/MissionVision";
import Facilities from "./Facilities/Facilities";
// import Alumani from "./Alumani/Alumani";
// import DiamondGallery from "../About/GalleryDesign/DiamondGallery";

const Home = () => {
  const [newsData, setNewsdata] = useState({});
  const [faqData, setFaqdata] = useState({});
  const dispatch = useDispatch();
  const faqState = useSelector((state) => state.getAllFaqReducer);
  const { allFaqQue, error, loading } = faqState;
  // setFaqdata(allFaqQue);
  const newsState = useSelector((state) => state.getAllNewsReducer);
  const { allnews } = newsState;
  // setNewsdata(allnews);

  console.log("all", allnews);
  console.log("faq", allFaqQue);
  useEffect(() => {
    dispatch(getAllFaq());
    dispatch(getAllNews());
  }, [dispatch, getAllNews, getAllFaq]);
  return (
    <div className="welcome">
      <CarouselFront />
      <CardMenuBox />
      <div className="welcome">
        <h4 className="text-center p-3 text-success  text-bg-light">
          Welcome to Sunrise Sr. Secondary School
        </h4>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col xs={12} md={9}>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col xs={10} md={5}>
                <Card>
                  <Card.Img
                    style={{
                      width: "14rem",
                      height: "14rem",
                      margin: "auto",
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                      padding: "5px",
                      cursor: "pointer",
                      border: "1px solid green",
                    }}
                    variant="top"
                    src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Director Message
                    </Card.Title>
                    <Card.Text>
                      In a rapidly transforming world, schools have to take upon
                      themselves the responsibility of preparing children to
                      face up to any challenge that the future may throw before
                      them
                    </Card.Text>
                    <NavLink to={"/about/director"}>
                      <Button variant="outline-success">
                        Want to know more..
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={10} md={5}>
                <Card>
                  <Card.Img
                    style={{
                      width: "14rem",
                      height: "14rem",
                      margin: "auto",
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                      padding: "5px",
                      cursor: "pointer",
                      border: "1px solid green",
                    }}
                    variant="top"
                    src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Principal Message
                    </Card.Title>
                    <Card.Text>
                    In our fast-changing world, schools
                have an important job. They need to prepare children to handle
                any challenges they might face in the future
                    </Card.Text>
                    <NavLink to={"/about/principal"}>
                      <Button variant="outline-success">
                        want to know more...
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <h5 className="text-center bg-success py-2">News and Event</h5>
            <Accordion
              defaultActiveKey={["0"]}
              style={{
                boxSizing: "borderBox",
                maxHeight: "45vh",
                overflowY: "scroll !important",
                overflowX: "hidden",
              }}
              alwaysOpen
            >
              {allnews &&
                allnews.map((news) => {
                  return (
                    <Accordion.Item eventKey={news._id}>
                      <Accordion.Header>{news.title}</Accordion.Header>
                      <Accordion.Body>{news.description}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
            </Accordion>
          </Col>
        </Row>
        <div className="my-4">
          <MissionVision />
        </div>
        <Row className="mt-4">
          <Col>
            <OurStudent />
          </Col>
        </Row>
      </div>
      {/* <Facilities/> */}
      <div>
        <Container style={{ marginTop: "9rem" }}>
          <Row>
            <Col xs={12} md={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/P_NPNqJnbos?si=7jj-UUuK_CBhn1t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              {/* <Card.Img
                src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
                alt="imag"
              /> */}
            </Col>
            <Col xs={12} md={6}>
              <h5 className="text-center py-3">FAQ-Answers</h5>
              <Accordion
                defaultActiveKey={["0"]}
                style={{
                  boxSizing: "borderBox",
                  maxHeight: "45vh",
                  overflowY: "scroll !important",
                  overflowX: "hidden",
                }}
                alwaysOpen
              >
                {allFaqQue &&
                  allFaqQue.map((que) => {
                    return (
                      <Accordion.Item eventKey={que._id}>
                        <Accordion.Header>{que.que}</Accordion.Header>
                        <Accordion.Body>{que.ans}</Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
