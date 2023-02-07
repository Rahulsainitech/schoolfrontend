import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllImage, filterGallery } from "../Action/imageAction";
import {
  Button,
  ButtonGroup,
  Carousel,
  Col,
  Row,
  Image,
  Modal,
} from "react-bootstrap";
import Error from "../Warning/Error";
import Loader from "../Warning/Loader";

const Gallery = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllImgReducer);
  const { allimages, error, loading } = userState;
  const [gallery, setGallery] = useState(allimages);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(true);
  console.log(allimages);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getAllImage());
  }, [dispatch]);

  useEffect(() => {}, []);
  return (
    <div className="box">
      {error && (
        <Error
          error={
            "error in retrieving pic please try again after some time :" + error
          }
        />
      )}
      {loading && <Loader />}
      <h5 className="text-center py-2 text-danger">Our Memories</h5>
      <ButtonGroup className="container mb-2  d-flex justify-space-around flex-wrap">
        <Button
          variant="outline-success"
          onClick={() => dispatch(getAllImage())}
        >
          All
        </Button>
        <Button
          variant="outline-success"
          onClick={() => dispatch(filterGallery("Independance day"))}
        >
          Independance
        </Button>
        <Button
          variant="outline-success"
          onClick={() => dispatch(filterGallery("Republic day"))}
        >
          Repulic day
        </Button>
        <Button
          variant="outline-success"
          onClick={() => dispatch(filterGallery("Cultural"))}
        >
          Cultural
        </Button>
        <Button
          variant="outline-success"
          onClick={() => dispatch(filterGallery("Weekly activity"))}
        >
          Annual function
        </Button>
        <Button
          variant="outline-success"
          onClick={() => dispatch(filterGallery("Others"))}
        >
          Others
        </Button>
      </ButtonGroup>

      <Modal show={show} onHide={handleClose} animation={true} size="lg" centered>
        <Modal.Body className="p-0">
          {show && (
            <div
              style={{
                maxHeight: "75vh",
                display: "block",
                overflow: "hidden",
              }}
            >
              <Carousel
                slide={false}
                style={{ background: "#FCDDB0", width: "100%" }}
                className="mx-auto galleryc"
              >
                {allimages
                  ? allimages.map((img) => {
                      return (
                        <Carousel.Item
                          key={img._id}
                          style={{ height: "50vh", overflow: "hidden" }}
                        >
                          <Image
                            className="box2 img-fluid"
                            src={img.image}
                            alt={img.description}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                              width: "70%",
                            }}
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                            <p>{img.description}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })
                  : " "}
              </Carousel>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <div className="box1">
        {allimages
          ? allimages.map((img) => {
              return (
                <img
                  className="box2"
                  key={img._id}
                  src={img.image}
                  alt={img.description}
                  onClick={() => setShow(show ? false : true)}
                />
              );
            })
          : " "}
      </div>
    </div>
  );
};

export default Gallery;
