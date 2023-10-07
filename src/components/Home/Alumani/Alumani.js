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
          <div className="card " style={{maxWidth: '50rem'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://wallpapercave.com/wp/wp8602753.jpg"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="text-center">Card title</h5>
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
          <div className="card " style={{maxWidth: '50rem'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://castyou-website.sgp1.digitaloceanspaces.com/2019/11/IMG_0925.jpg"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="text-center">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.This is a wider card with supporting text below as a natural
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
          <div className="card " style={{maxWidth: '50rem'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://thumbs.dreamstime.com/b/happy-indian-woman-22749119.jpg"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-center">Card title</h5>
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
      </Carousel>
    </div>
  );
};

export default Alumani;
