import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import { facultyRegister } from "../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Success from "../../Warning/Success";
import Error from "../../Warning/Error";
import Loader from "../../Warning/Loader";
import { Col, Row } from "react-bootstrap";
// import swal from "sweetalert2";


const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob,setDob]=useState("")
  const [regno,setRegno]=useState("")
  const [gen,setGen]=useState("")
  const [qual,setQual]=useState("")
  const[phone,setPhone]=useState("")
  const [add,setAdd]=useState("")
  const [interst,setInterst]=useState("")
  const [isAdmin,setAdmin]=useState("")
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [image, setimage] = useState('')
const [url, setUrl] = useState('')

  const registerState = useSelector((state) => state.registerFacultyReducer);
  const { error, success, loading } = registerState;

  const postDetails = async() => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "Instaclone")
    data.append("cloud_name", "geeta9812")
    
    await fetch("https://api.cloudinary.com/v1_1/geeta9812/image/upload", {
        method: "POST",
        body: data
    })
    .then((res) => res.json())
    .then(data => {
      setUrl(data.url)
        console.log("this is my ", url)
    })
    .catch(err => { console.log(err) })     
} 

  const RegisterHandler = () => {
    // e.preventDefault();
    if (cpassword !== password) {
      alert("password is not matching");
    } else {
      const user = { name, email,dob,regno,gen,qual,phone,add,interst,isAdmin,url, password };
      console.log(user);
      dispatch(facultyRegister(user));
      console.log(user);
      setName("");
      setEmail("");
      setDob("");
      setRegno("");
      setGen("");
      setQual("")
      setAdd("");
      setInterst("")
      setAdmin("");
      setimage("")
      setPassword("");
      setCpassword("");
    }
  };
  useEffect(()=>{
    if (url){
      RegisterHandler()
    }
  },[url])

  return (
    <Row>
   {error && <Error error={"error in submit form please try again after some time :" + error} />}
      {success && <Success success="student added successfully" />}
      {loading && <Loader />}
      <h4 className="my-3 text-center">Faculty Registration Form</h4>
      <Col md={8} className="mx-auto">
        <Form>
          <Row>
            <Form.Group className="mb-3 col-6" controlId="formBasicName">
              <Form.Label>Enter Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-4" controlId="Dateofbirth">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="regno">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="number"
                value={regno}
                onChange={(event) => setRegno(event.target.value)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="formselectgender">
              <Form.Label>Select Genter</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(event)=>setGen(event.target.value)}>
                <option>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-6" controlId="formBasicqual">
              <Form.Label>Highest Qualifacation</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(event)=>setQual(event.target.value)}>
                <option>Open this select menu</option>
                <option value="XII">XII</option>
                <option value="JBT">JBT</option>
                <option value="B.A">B.A.</option>
                <option value="M.A>">M.A.</option>
                <option value="BSC">BSC</option>
                <option value="MSC">MSC</option>
                <option value="Graduation(other)">Graduation(other)</option>
                <option value="Post Graduation(other)">Post Graduation(other)</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="contactno">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter phone No"
              />
            </Form.Group>
            
          </Row>
          <Row>
            <Form.Group className="mb-3 col-4" controlId="formBasicAdd">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={add}
                onChange={(event) => setAdd(event.target.value)}
                placeholder="Enter Your Address"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="formBasicInterst">
              <Form.Label>Area Of Interest</Form.Label>
              <Form.Control
                type="text"
                value={interst}
                onChange={(event) => setInterst(event.target.value)}
                placeholder="Area of Interst"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="Adminacess">
              <Form.Label>Admin acess</Form.Label>
              <Form.Select aria-label="Default select example2" onChange={(event)=>setAdmin(event.target.value)}>
                <option>Open this select menu</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose Your pic</Form.Label>
              <Form.Control
                        type="file"
                        className="form-control"
                        placeholder="upload from device"
                      
                        onChange={(e) => setimage(e.target.files[0])}
                    />
            </Form.Group>
          <Row>
            <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
              <Form.Label>Set Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={cpassword}
                onChange={(event) => setCpassword(event.target.value)}
                placeholder="Confirm Password"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <NavLink to="/login">
            <Form.Text className="text-muted d-block my-2 py-2">
              Already have an Account? Click here....
            </Form.Text>
          </NavLink>
      
          <Button variant="outline-success my-2 " onClick={() => postDetails()}>
            Register
          </Button>
              </Form>
      </Col>
    </Row>
  );
};

export default Register;
