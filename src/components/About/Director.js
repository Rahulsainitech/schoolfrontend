import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Director = () => {
  return (
    <>
      <div>
        <Container className="princ-msg">
          <Row>
            <Col style={{ margin: "auto" }}>
              <Card style={{ background: "#FFA41B" }}>
                <Card.Img
                  variant="top"
                  src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
                  style={{
                    width: "11rem",
                    height: "11rem",
                    margin: "auto",
                    padding: "3px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "3px solid green",
                  }}
                  className="my-4"
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
                difference in their community and the world. At Spss, we create
                a friendly and fair place where boys and girls learn together
                and treat each other nicely. We don't treat anyone differently
                because of their gender, beliefs, or where they come from. We
                want to congratulate and wish all our students and families the
                best.These experiences help our children prepare for the future
                and find their place in the world. Our school's main goal is to
                help children become valuable members of society. We do this by
                getting involved in the community and sharing our joy with
                others. Let's work together to ensure our children grow up to be
                open-minded, aware, and thoughtful young people who can make the
                world a better place. Let's all enjoy it together.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Director;
