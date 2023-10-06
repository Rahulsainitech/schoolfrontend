import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image5 from "../img/5.jpeg";
import "../styles/App.css";
const Principal = () => {
  return (
    <>
      <div>
        <Container className="princ-msg">
          <Row>
            <Col style={{ margin: "auto" }}>
              <Card style={{ background: "#FFA41B" }} className="py-4">
                <Card.Img
                  variant="top"
                  src={Image5}
                  style={{
                    width: "11rem",
                    height: "11rem",
                    margin: "auto",
                    padding: "3px",
                    borderRadius:"50%",
                    // clipPath:
                    //   "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    cursor: "pointer",
                    border: "3px solid green",
                  }}
                />
                <Card.Title className="text-center text-success py-2">
                  Jahid Khan
                </Card.Title>
              </Card>
            </Col>
            <Col xs={9}>
              <Card.Title className="text-center text-success p-3">
                Principal Desk
              </Card.Title>
              <Card.Text className="text-start p-5">
                In our fast-changing world, schools
                have an important job. They need to prepare children to handle
                any challenges they might face in the future. This includes
                learning to work and live together, taking care of our
                environment, respecting different cultures and beliefs, and
                supporting democratic values. Sunrise Public Sr. Secondary School is proud to
                provide high-quality education and hopes to fulfill the dreams
                of our founder, Mr. Mazid Khan. Our students are amazing. They
                actively participate in school life and always strive to do
                their best. They make us proud by showing qualities like
                bravery, kindness, resilience, and good values. This academic
                year, our students took part in various competitions like the
                ATL Marathon, National Olympiads, and CBSE cluster competitions
                under the GPSC banner. These experiences help our children
                prepare for the future and find their place in the world. Our
                school's main goal is to help children become valuable members
                of society. We do this by getting involved in the community and
                sharing our joy with others. Let's work together to ensure our
                children grow up to be open-minded, aware, and thoughtful young
                people who can make the world a better place.  Let's all enjoy it together.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Principal;
