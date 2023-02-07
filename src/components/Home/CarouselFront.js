import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../img/1.jpg";
import image12 from "../img/2.jpg";
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
              <h3>Our Champions</h3>
              <p>National level Kho-kho Champions 2020-21</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "75vh" }}
              src={image12}
              alt="First slide"
            />
            <Carousel.Caption className="front">
              <Image src={Logo} />
              <h3>Sarvodaya Public School</h3>
              <p>Ward No-9 Firozepur Jhirka, Dist-Nuh 122104,Haryana</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselFront;
