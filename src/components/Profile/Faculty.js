import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import "./common.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Faculty = () => {
  const { id } = useParams();
  const userState = useSelector((state) => state.getAllUserReducer);
  const [faculty, setFaculty] = useState("");
  const { users, error, loading } = userState;
  console.log(users, "djfdfjk");

  useEffect(() => {
    for (let i in users) {
      console.log(i, "i");
      if (users[i]._id === id) {
        // alert("kk")
        console.log(i, "for loop");
        setFaculty(users[i]);
      }
      console.log(faculty, "dfdfdfdfd");
    }
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
                        src={faculty.url}
                        alt={faculty.name}
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
                  <h5 className="text-capitalize">{faculty.name}</h5>
                  <h6>{faculty.interst}</h6>
                  <p className="proile-rating">
                    EXPERIENCE : <span>2 YEARS</span>
                  </p>
                  <h6>Admin Acess:&nbsp;{faculty.isAdmin?"YES":"NO"}</h6>
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
                    <div className="col-md-6">
                      <label>Registration no</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.regno}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.interst}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Highest Qualification</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.qual}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">
                      <p>{faculty.add}</p>
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

export default Faculty;
