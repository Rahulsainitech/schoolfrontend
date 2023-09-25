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
import NewsAndEvent from "./newsevent/NewsAndEvent";
import { NavLink } from "react-router-dom";
import MissionVision from "../About/MissionVision";
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
            <Row  style={{
            display: "flex",
            justifyContent: "center",
          }}>
              <Col xs={10} md={5}>
                <Card >
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
                    src="https://res.cloudinary.com/geeta9812/image/upload/v1667024247/gvxng6w8qyemxqe4599d.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">Director Message</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success" >Want to know more..</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={10} md={5}>
                <Card >
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
                    src="https://res.cloudinary.com/geeta9812/image/upload/v1667024247/gvxng6w8qyemxqe4599d.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">Principal Message</Card.Title>
                    <Card.Text>
                   
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <NavLink to={"/about"}><Button variant="outline-success">want to know more...</Button></NavLink>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={3}>
                <Card style={{ width: "18rem", height: "18rem" }} className="bg-light">
                  <Card.Img
                    style={{
                      width: "14rem",
                      height: "14rem",
                      margin: "auto",
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                        padding:"5px",
                        cursor:"pointer",
                        border:'1px solid green'
                    }}
                    src="https://res.cloudinary.com/geeta9812/image/upload/v1667024247/gvxng6w8qyemxqe4599d.jpg"
                  ></Card.Img>
                </Card>
              </Col>

              <Col xs={12} md={9}>
                <Card className="text-center bg-light">
                  <Card.Body>
                    <Card.Title className="text-info">About School</Card.Title>
                    <Card.Text>
                      Sunrise Sr. Secondary School is a premier day school offering an
                      enviable state-of-the-art infrastructure & a truly world
                      class campus spread over 13 acres, nestled in the pristine
                      surroundings of the Aravali Hills. DPS Maruti Kunj was
                      born when Maruti Udyog Limited the automobile giant joined
                      hands with the Sarvodaya Society, an organization synonymous
                      with quality education and overall excellence,to create an
                      institution which would open its portal to every student
                      who would have the will and vigour to achieve academic
                      honours. The school thus is a product of the union of two
                      extraordinary super achievers in their respective fields.
                      <br />
                      <br />
                    </Card.Text>
                    <NavLink to={"/about"}><Button variant="outline-success">know more...</Button></NavLink>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col> */}
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
        <h4 className="text-center text-success ">Acknoweledge</h4>
        <MissionVision/>
        </div>
        <Row className="mt-4">
          <Col>
            <NewsAndEvent />
          </Col>
        </Row>
      </div>
      <div>
        <Container style={{ marginTop: "9rem" }}>
          <Row>
            <Col xs={12} md={6}>
              <Card.Img
                src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
                alt="imag"
              />
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
