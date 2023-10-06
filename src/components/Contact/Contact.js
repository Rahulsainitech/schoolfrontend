import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import {Helmet} from "react-helmet";

const Contact = () => {
  return (
    <Container>
    <h3 className="text-center py-4">Contact Us</h3>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <meta
          name="description"
          content="SUNRISE PUBLIC HIGH SCHOOL,Agon,F.P.JHIRKA "
        />
        <meta
          name="keywords"
          content="Sunrise Public Sr. Secondary School Firozepur Jhirka,Mewat schools,CBSE Affiliated School,Science,Art,Commerce,Private School,Highly Qualified Teacher,Admissions,Award-Winning School"
        />
        <link
          rel="canonical"
          href="https://sunrise-public-sr-secondary-school.netlify.app/contact"
        />
      </Helmet>
      <Row style={{"minHeight":"60vh"}}>
        <Col xs={12} md={6}>
          <Card >
            <Card.Body className="d-flex">
            <iframe
              width="700"
              height="440"
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
            {/* <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Sarvodaya%20Middle%20School%2C%20Firozepur%20%20Jhirka%20%2C122104+(Sarvodaya%20Public%20School)&amp;ie=UTF8&amp;t=p&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Your Message</Form.Label>
              <textarea class="form-control" rows="5" id="comment" placeholder="Type message here..."></textarea>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
