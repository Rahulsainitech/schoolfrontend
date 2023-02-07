import React from "react";
import { Carousel } from "react-bootstrap";

const Alumani = () => {
  return (
    <div
    style={{
      display:"flex"
    }} 
    >
      <Carousel
        slide={false}
        style={{ background: "#FCDDB0" }}
        className="mx-auto galleryc"
      >
        <Carousel.Item >
          <div className="card " style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="card " style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated df3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="card " style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated ere3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="card " style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 4545 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Alumani;
