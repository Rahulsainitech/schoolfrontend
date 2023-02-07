import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Form,Button,Row,Col} from "react-bootstrap";
import { addFaq } from '../Action/faqAction';
import Error from "../Warning/Error";
import Loader from "../Warning/Loader";
import Success from "../Warning/Success";


const AddFaq= () => {

    const dispatch = useDispatch();
    const [que, setQue] = useState();
    const userState=useSelector((state)=>state.faqAddReducer)
    const { error, success, loading } = userState;
    const [ans,setAns] = useState();
    
  
    const submitForm = (e) => {
      e.preventDefault();
      const faqInfo = {
       que,
       ans
      };
      dispatch(addFaq(faqInfo));
      console.log(faqInfo);
      setQue("")
      setAns("")
    };

  return (
    <>
    {error && <Error error={"error while loading users :" + error} />}
      {loading && <Loader />}
      {success && <Success success={"question added to the faqs"}/>}
        
        <Form
        onSubmit={(e) => submitForm(e)}
        style={{ minHeight: "70vh" }}
        className="bg-light my-3 p-3"
      >
        <h6 className="text-center">FAQ Questions</h6>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Questions</Form.Label>
            <Form.Control
              type="text"
              value={que}
              onChange={(e) => setQue(e.target.value)}
              placeholder="Enter Faq question"
            />
          </Form.Group>        
          </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Faq ans</Form.Label>
          <Form.Control
            type="text"
            value={ans}
            onChange={(e) => setAns(e.target.value)}
            placeholder="Enter Faq ans"
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Add FAQ 
        </Button>
      </Form>
    </>
  )
}

export default AddFaq;