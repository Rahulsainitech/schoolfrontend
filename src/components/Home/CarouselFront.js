import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";
import Logo from "../styles/logo.png";
import { Image } from "react-bootstrap";

const CarouselFront = () => {
  return (
    <>
      <div
        style={{
          maxHeight: "75vh",
          display: "block",
          overflow: "hidden",
        }}
      >
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "75vh" }}
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Sunrise Public Senior Secondary School </h5>
              <p>
                Founded in 2004, affiliated to CBSE. Affiliation ID is 531455.
                Address of the school is: Vpo Agon. PIN Code: 122104.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "75vh" }}
              src={image2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Extra Currucular Activities</h5>
              <p>
                These Activities play a vital role in a student's holistic
                development. They offer numerous advantages, including skill
                development, academic improvement, socialization, confidence
                building, and personal growth, making them an essential
                component of a well-rounded education.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "75vh" }}
              src={image3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Our Champions</h5>
              <p>
                Our top achievers exemplify our commitment to excellence. We
                persistently strive to achieve exceptional results, fostering a
                culture of continuous improvement and outstanding performance.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "75vh" }}
              src={image4}
              alt="First slide"
            />
            <Carousel.Caption className="front">
              <Image src={Logo} />
              <h3>Sunrise Public Sr. Secondary School</h3>
              <address>Agon,Firozepur Jhirka, Dist-Nuh 122104,Haryana</address>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselFront;
