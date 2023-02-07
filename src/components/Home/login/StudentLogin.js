import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../../Action/userAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import Error from "../../Warning/Error";

const StudentLogin = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginStudentReducer);
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const { error, success, loading } = loginState;
  const loginHandler = (e) => {
    e.preventDefault();
    const user = { name, regno };
    dispatch(loginStudent(user));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
    {/* {error && <Error error={error}/>} */}
      <Form style={{border:"1px solid green",margin:"3rem 0",background:"#EEEEEE"}} className=" p-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Registration No</Form.Label>
          <Form.Control
            type="Number"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
            placeholder="Enter Date of Birth"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <NavLink to="/studentregister">
          <Form.Text className="text-muted d-block">
            Don't have an Account? Click here....
          </Form.Text>
        </NavLink>
        <Button variant="outline-primary" type="submit" onClick={loginHandler}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default StudentLogin;
