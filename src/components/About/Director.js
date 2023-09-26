import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Director = () => {
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
                  Majid khan
                </Card.Title>
              </Card>
            </Col>
            <Col xs={9}>
              <Card.Title className="text-center text-success p-3">
                Director Desk
              </Card.Title>
              <Card.Text className="text-start p-5">
                Dear Parents and Students, In today's world, schools play a big
                role in teaching kids important values like fairness, peace, and
                taking care of the planet. We believe schools should help kids
                become responsible and make the world a better place. We have a
                special saying for our students: "Success is not just about
                starting things; it's about finishing them." This means we want
                our students to take action and make a positive impact. At our
                school, we think of education as a team effort between teachers,
                parents, and students. Teachers and parents work together to
                support the child's dreams and help them make a positive
                difference in their community and the world. At Spss, we create a
                friendly and fair place where boys and girls learn together and
                treat each other nicely. We don't treat anyone differently
                because of their gender, beliefs, or where they come from. We
                want to congratulate and wish all our students and families the
                best.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Director;
