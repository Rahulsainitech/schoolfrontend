import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import { registerStudent } from "../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Success from "../../Warning/Success";
import Error from "../../Warning/Error";
import Loader from "../../Warning/Loader";
import { Col, Container, Row } from "react-bootstrap";

const StudentRegister = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [father,setFather]=useState("");
  const [phone,setPhone]=useState("");
  const [mother,setMother]=useState("");
  const [dob,setDob]=useState("");
  const [regno,setRegno]=useState("");
  const [gen,setGen]=useState("");
  const [cls,setCls]=useState("");
  const [rollno,setRollno]=useState("");
  const [add,setAdd]=useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [image, setimage] = useState('')
  const [url, setUrl] = useState(null)


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
    })
    .catch(err => { console.log(err) })

     
} 

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
  const RegisterHandler = (e) => {
    // e.preventDefault();
    if (cpassword !== password) {
      alert("password is not matching");
    } else {
      const user = { name,father,phone,mother,dob,add,rollno,regno,url,gen,cls, password };
      dispatch(registerStudent(user));
      setName("");
      setAdd("")
      setCls("")
      setFather("")
      setMother("")
      setDob("")
      setGen("")
      setPhone("")
      setPassword("");
      setCpassword("");
    }
  };
  const onSubmit=()=>{
    postDetails()
  }
  useEffect(()=>{
    if (url){
      RegisterHandler()
    }
  },[url])
  return (
    <Container>
    {error && <Error error={"error in submit form please try again after some time :" + error} />}
      {success && <Success success="student added successfully" />}
      {loading && <Loader />}
      <Row>
        <h4 className="text-center my-3">Student Registration Form</h4>
        <Col md={8} className="m-auto">
          <Form>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formBasicName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicNameFather">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  value={father}
                  onChange={(event) => setFather(event.target.value)}
                  placeholder="Enter Father Name"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formBasicContact">
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formMotherName">
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  type="text"
                  value={mother}
                  onChange={(event) => setMother(event.target.value)}
                  placeholder="Mother's Name"
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
              <Form.Group className="mb-3 col-4" controlId="Regno">
                <Form.Label>Registration Number</Form.Label>
                <Form.Control
                  type="number"
                  value={regno}
                  onChange={(event) => setRegno(event.target.value)}
                  placeholder="registration no"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-4" controlId="formBasicGEN">
                <Form.Label>Select Genter</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>setGen(e.target.value)}>
                  <option>Open this select menu</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formBasicPassword59">
                <Form.Label>Class</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>setCls(e.target.value)} >
                  <option>Open this select menu</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">KG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicPassword2">
                <Form.Label>Roll No</Form.Label>
                <Form.Control
                  type="number"
                  value={rollno}
                  onChange={(event) => setRollno(event.target.value)}
                  placeholder="If assigned"
                />
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
            <Form.Group className="mb-3" controlId="formBasicadd">
              <Form.Label>Permanent Adreess</Form.Label>
              <Form.Control
                type="text"
                value={add}
                onChange={(event) => setAdd(event.target.value)}
                placeholder="Enter address"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
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
              <Form.Text className="text-muted d-block">
                Already have an Account? Click here....
              </Form.Text>
            </NavLink>
            <Button variant="outline-primary" onClick={(e) => onSubmit(e)}>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentRegister;
