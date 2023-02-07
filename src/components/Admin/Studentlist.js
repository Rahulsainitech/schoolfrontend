import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterStudent, getAllStudents } from "../Action/userAction";
import Loader from "../Warning/Loader";
import Error from "../Warning/Error";
import { Table, Image, Container, Col, Form, Row } from "react-bootstrap";
// import { deleteUserById } from "../Action/userAction";
// import { addAdmin } from "../Action/userAction";
import AdminNav from "./AdminNav";
import { AiFillPhone } from "react-icons/ai";
// import { GrMailOption } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Userlist = () => {
  const dispatch = useDispatch();
  const [standard, setStandard] = useState("all");
  const [studentName, setStudentName] = useState("");
  const userState = useSelector((state) => state.getAllStudentsReducer);
  const { users, error, loading } = userState;
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <Container>
      {error && <Error error={"error while loading users :" + error} />}
      {loading && <Loader />}
      <AdminNav />
      <Row className="mt-md-3 mb-md-2">
        <Col xs={6} md={4}>
          <Row>
            <Form.Group
              className="mb-3 mt-3 col-10 mx-auto"
              controlId="formGridName"
            >
              {/* <Form.Label></Form.Label> */}
              <Form.Control
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <div className="col-2 ">
              <BsSearch className="mt-4" onClick={()=>dispatch(filterStudent(studentName,standard))} style={{cursor:"pointer",fontSize:"1.5rem"}} />
            </div>
          </Row>
        </Col>
        <Col md={4} xs={0}></Col>
        <Col xs={6} md={4}>
          <Row>
            <Form.Group
              className="mb-3 mt-3 col-10 mx-auto"
              controlId="formClassSelect"
            >
              <Form.Select onClick={(e) => setStandard(e.target.value)}>
                <option>Select Class</option>
                <option value={"1"}>
                  1<sup>st</sup>
                </option>
                <option value={"2"}>
                  2<sup>nd</sup>
                </option>
                <option value={"3"}>
                  3<sup>rd</sup>
                </option>
                <option value={"4"}>
                  4<sup>th</sup>
                </option>
                <option value={"5"}>
                  5<sup>th</sup>
                </option>
                <option value={"6"}>
                  6<sup>th</sup>
                </option>
                <option value={"7"}>
                  7<sup>th</sup>
                </option>
                <option value={"8"}>
                  8<sup>th</sup>
                </option>
              </Form.Select>
            </Form.Group>
            <div className="col-2">
            <BsSearch className="mt-4" onClick={()=>dispatch(filterStudent(studentName,standard))} style={{cursor:"pointer",fontSize:"1.5rem"}} />
            </div>
          </Row>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center">Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Class</th>
            <th>For more info..</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="text-center">
                    <Image
                      src={user.url}
                      alt={user.name}
                      style={{ width: "80px", height: "100px" }}
                    />
                  </td>
                  <td className="text-capitalize">{user.name}</td>
                  <td>
                    {user.phone}
                    <a href={"tel:+91" + user.phone}>
                      &nbsp;&nbsp;
                      <kbd className="text-white">
                        <AiFillPhone />
                      </kbd>
                    </a>
                  </td>
                  <td>
                    <strong>{user.cls}</strong>
                  </td>
                  {/* <td>{user.createdAt.substring(0, 10)}</td> */}
                  <td>
                    <NavLink to={"/studentprofile/" + user._id}>
                      <kbd>Click here...</kbd>
                    </NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Userlist;
