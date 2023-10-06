import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { facultyLogin } from "../../Action/userAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import {ImKey} from "react-icons/im";
import {FaUserTie} from "react-icons/fa"

const Login = () => {
  const dispatch = useDispatch();
  // const loginState = useSelector((state) => state.loginFacultyReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { error, success, loading } = loginState;
  const loginHandler = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(facultyLogin(user));
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
      <Form style={{border:"1px solid green",margin:"3rem 0",background:"#E5EBB2"}} className=" p-5">
        <Form.Group className="mb-3"
         controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <FaUserTie/>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <ImKey/>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Password" />
        </Form.Group>
        <NavLink to="/facultyregister">
          <Form.Text className="text-danger d-block my-1">
            Don't have an Account? Click here....
          </Form.Text>
        </NavLink>
        <Button variant="outline-primary my-1" type="submit" onClick={loginHandler}>
          Login
        </Button>
      </Form>
    </div>
  
  );
};

export default Login;
