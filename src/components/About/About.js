import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MissionVision from "./MissionVision";
import DiamondGallery from "./GalleryDesign/DiamondGallery";
import Alumani from "../Home/Alumani/Alumani";
import { Card } from "react-bootstrap";
import Image4 from "../img/4.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div style={{ background: "#CFFF8D" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Spsss</title>
        <meta
          name="description"
          content="SUNRISE PUBLIC HIGH SCHOOL AGON was established in 2004 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in F.P.JHIRKA block of MEWAT district of HARYANA. The school consists of Grades from 1 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Hindi is the medium of instructions in this school. "
        />
        <meta
          name="keywords"
          content="Sunrise Public Sr. Secondary School Firozepur Jhirka,Mewat schools,CBSE Affiliated School,Science,Art,Commerce,Private School,Highly Qualified Teacher,Admissions,Award-Winning School"
        />
        <link
          rel="canonical"
          href="https://sunrise-public-sr-secondary-school.netlify.app/about"
        />
      </Helmet>
      <div>
        <Container>
          <Row className="py-4">
            <Col md={5} xs={12} className="my-4">
              <Card.Img src={Image4} />
            </Col>
            <Col md={7} xs={12}>
              <h5 className="text-center">About Sunrise</h5>
              <p>
                <strong>SUNRISE PUBLIC SR. SECONDARY HIGH SCHOOL </strong>AGON was established
                in 2004 and it is managed by the Pvt. Unaided. It is located in
                Rural area. It is located in F.P.JHIRKA block of MEWAT district
                of HARYANA. The school consists of Grades from 1 to 12. The
                school is Co-educational and it doesn't have an attached
                pre-primary section. The school is Not Applicable in nature and
                is not using school building as a shift-school. Hindi is the
                medium of instructions in this school. This school is
                approachable by all weather road. In this school academic
                session starts in April. The school has Private building. It has
                got 11 classrooms for instructional purposes. All the classrooms
                are in good condition. It has 2 other rooms for non-teaching
                activities. The school has a separate room for Head
                master/Teacher.The school has have electric connection. The
                school has 7 boys toilet and it is functional. and 3 girls
                toilet and it is functional. The school has a big playground including basket ball, football, volleyball, kho-kho playground. The
                school has a library and has 3500 books in its library. The
                school have dedicated ramp for disabled children to access
                classrooms. The school has dedicated computer lab for teaching and learning
                purposes and all are functional. The school is Not Applicable
                providing mid-day meal.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <MissionVision />
      <hr />
      <h5 className="text-center my-2 p-3">Our Alumani</h5>
      <Alumani />
      <hr />
      <Container>
        <h5 className="text-center text-success faculty py-5">Our Faculties</h5>
        <DiamondGallery />
      </Container>
    </div>
  );
};

export default About;
