import React, { useEffect, useState } from "react";
import { Form, Row, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewImage } from "../Action/imageAction";
import Error from "../Warning/Error";
import Loader from "../Warning/Loader";
import Success from "../Warning/Success";
import AdminNav from "./AdminNav";


const AddNewImg = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState();
  const userState = useSelector((state) => state.imageAddReducer);
  const { error, success, loading } = userState;
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [public_id,setPublic_id]=useState("")

 
  const postDetails = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", url);
    data.append("upload_preset", "Instaclone");
    data.append("cloud_name", "geeta9812");
    

    await fetch("https://api.cloudinary.com/v1_1/geeta9812/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"image data",data)
        setImage(data.url)
        setPublic_id(data.public_id)
        console.log("this is my ",image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitForm = () => {
    
    const picInfo = {
      image,
      description,
      category,
      public_id
    };
    dispatch(addNewImage(picInfo));
    console.log("picinfo",picInfo);
    setCategory("");
    setDescription("");
    setImage("");
  };
  useEffect(() => {
    if (image) {
      submitForm();
    }
  }, [image]);
  return (
    <>
      {error && <Error error={"Error while adding Image to Gallery:" + error} />}
      {success && <Success success="Image added successfully" />}
      {loading && <Loader />}
      <AdminNav />
      <Container>
      <Row>
      <Form
        style={{ minHeight: "70vh" }}
        className="bg-light p-3 col-md-8 col-12 mx-auto my-3"
      >
        <h5 className="text-center">Add New Image</h5>
        
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose Your pic</Form.Label>
          <Form.Control
            type="file"
            className="form-control"
            placeholder="upload from device"
            onChange={(e) => setUrl(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Image Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write speciality of Image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Adminacess98">
          <Form.Label>Image Category</Form.Label>
          <Form.Select
            aria-label="Default select example2"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Open this select menu</option>
            <option value="Independance day">Independance day</option>
            <option value="Republic day">Republic day</option>
            <option value="Cultural">Cultural</option>
            <option value="Weekly activity">Special</option>
            <option value="Others">Others</option>
          </Form.Select>
        </Form.Group>

        <Button variant="outline-primary" onClick={(e) => postDetails(e)}>
          Add New
        </Button>
      </Form>
      </Row>
      </Container>
    </>
  );
};

export default AddNewImg;
