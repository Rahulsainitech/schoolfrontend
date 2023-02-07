
import React,{useState,useEffect} from "react";
import {  Col, Container } from "react-bootstrap";
import "./common.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllStudents } from "../Action/userAction";

const Student = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const userState = useSelector((state) => state.getAllStudentsReducer);
  const [student, setStudent] = useState("");
  const { users, error, loading } = userState;
  console.log(users, "djfdfjk");

  useEffect(() => {
    for (let i in users) {
      if (users[i]._id === id) {
        setStudent(users[i]);
      }
    }
    dispatch(getAllStudents())
  }, [users]);


  return (
    <Container>
    <div className="container emp-profile">
      <form method="post">
        <div className="row ">
          <div className="col-md-8 m-auto">
            <div className="row profile-head">
              <Col md={8} xs={12} sm={12}>
                <div className="" style={{ width: "300px", height: "300px",display:'flex',justifyContent:"center" }}>
                  <div className="profile-img">
                    <img
                      src={student.url}
                      alt={student.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        padding: "5px",
                        border: "1px solid green",
                        border: "1px solid rgb(200, 206, 200)",
                        boxShadow: "4px 4px rgb(227, 234, 227)"
                      }}
                    />
                    <div className="pt-3">
                      <input
                        type="submit"
                        className="profile-edit-btn"
                        name="btnAddMore"
                        value="Edit Profile"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12} sm={12}>
                <h5 className="text-capitalize">{student.name}</h5>
                <h6>CLASS :{" "+student.cls}</h6>
                <p className="proile-rating">
                  Roll No : <span>{student.rollno}</span>
                </p>
              </Col>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Registration no</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.regno}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Father's Name</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.father}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Mother's Name</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.mother}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Contact No</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Date of Birth</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.dob}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Address</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.add}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-6 col-6">
                    <p>{student.gen}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </Container>
  );
};

export default Student;
