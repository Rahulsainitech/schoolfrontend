import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import image14 from "../img/4.jpg";
import MissionVision from "./MissionVision";
import DiamondGallery from "./GalleryDesign/DiamondGallery";
import Alumani from "../Home/Alumani/Alumani";

const About = () => {
  return (
    <div style={{background:"#CFFF8D" }}>
      <div>
        <Container>
          <Row>
            <Col style={{margin:"auto"}}>
            <Card style={{background:"#CFFF8D" }}>
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
                        padding:"5px",
                        cursor:"pointer",
                        border:'1px solid green',
                    }}
              />
              <Card.Title className="text-center text-success py-2">Zahid Khan</Card.Title>
              </Card>
            </Col>
            <Col xs={9}>
              <Card.Title className="text-center text-success p-3">Principal Desk</Card.Title>
              <Card.Text className="text-start">
                In a rapidly transforming world, schools have to take upon
                themselves the responsibility of preparing children to face up
                to any challenge that the future may throw before them. Learning
                to work and live together being proactive to enhance the natural
                environment, respecting multi-culturalism and diverse faiths,
                strengthening democratic ideals and Aravali Public School has
                carved a niche for itself for the quality of education it is
                imparting. We are justifiably proud and hope to live up to the
                dreams and ideals of our founder honorable Mr. Md. Israil. Our
                students have plunged themselves into life at school and are
                constantly in the pursuit of excellence. They continue to give
                us much joy while embracing the ideals of courage, compassions,
                resilience and sound ethical values. Participation in ATL
                Marathon, National Olympiads, CBSE cluster, Inter School
                competition under GPSC banner were highlight of this academic
                session. These entire experiences give wings to our children to
                take their rightful place in the world of tomorrow. The bedrock
                of our school continues to the drive to nurture children into
                valuable contributive member of society. To this end, our thrust
                on specific community outreach initiatives, in addition to our
                joy of sharing week has increased. Let us join hands to ensure
                that our children grew up to be open minded, aware, critically
                analyzing young men and women with a conscience, who can lead
                our world to a better tomorrow.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
      <hr/>
      <h4 className="text-center text-success faculty py-2">Acknoweldgement</h4>
      <MissionVision/>
      <hr/>
      <h5 className="text-center">Our Alumani</h5>
      <Alumani/>
      <hr/>
      <Container>
      <h4 className="text-center text-success faculty py-5">Our Faculties</h4>
      <DiamondGallery/>
      </Container>
    </div>
  );
};

export default About;
