import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Principal = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col style={{ margin: "auto" }}>
              <Card style={{ background: "#CFFF8D" }}>
                <Card.Img
                  variant="top"
                  src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
                  className="py-2"
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
                />
                <Card.Title className="text-center text-success py-2">
                  Zahid Khan
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
                supporting democratic values. Aravali Public School is proud to
                provide high-quality education and hopes to fulfill the dreams
                of our founder, Mr. Md. Israil. Our students are amazing. They
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
