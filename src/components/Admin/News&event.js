import React,{useState} from 'react'
import AdminNav from './AdminNav'
import { useDispatch,useSelector } from 'react-redux';
import {Form,Button,Row,Col} from "react-bootstrap";
import { addNews } from '../Action/newsAction';


const News= () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const userState=useSelector((state)=>state.imageAddReducer)
    // const { error, success, loading } = userState;
    const [description, setDescription] = useState();
  
    const submitForm = (e) => {
      e.preventDefault();
      const newsInfo = {
        title,
        description,
      };
      dispatch(addNews(newsInfo));
      console.log(newsInfo);
      setTitle();
      setDescription();
    };

  return (
    <Row>
        <AdminNav/>
        <Col md={6} className="m-auto">
        <Form
        onSubmit={(e) => submitForm(e)}
        style={{ minHeight: "70vh" }}
        className="bg-light my-3 p-3"
      >
        <h5 className="text-center">Events</h5>
        <Row className="mb-3">
          <Form.Group as={Col}  controlId="formGridEmail">
            <Form.Label>Title of Event</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter news/event title"
            />
          </Form.Group>        
          </Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the news/event"
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Add
        </Button>
      </Form>
      </Col>
    </Row>
  )
}

export default News