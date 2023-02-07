import React, { useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import { classTimeTable } from "../Action/timeTableAction";
import Loader from "../Warning/Loader";
import { useDispatch } from "react-redux";

const TimeTable = () => {
  const dispatch=useDispatch()
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [peroid, setPeroid] = useState("");
  const [standard,setStandard]=useState("")
  const [timeTable, setTimeTable] = useState([]);
  const submitPeroid = () => {
    let Peroid;
    Peroid = {peroid, monday, tuesday, wednesday, thursday, friday, saturday}
    setTimeTable([...timeTable, Peroid]);
  };
  console.log(timeTable, "our time table");
  const submitTable=()=>{
      const  completTimeTable={standard,timeTable}
      dispatch(classTimeTable(completTimeTable))
      setTimeTable([])
      setStandard("")
  }
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
        <Form.Group className="mb-3 mt-5" controlId="formClassSelect">
                    <Form.Select onClick={(e) => setStandard(e.target.value)}>
                      <option>Select Class</option>
                      <option value={"1"}>1<sup>st</sup></option>
                      <option value={"2"}>2<sup>nd</sup></option>
                      <option value={"3"}>3<sup>rd</sup></option>
                      <option value={"4"}>4<sup>th</sup></option>
                      <option value={"5"}>5<sup>th</sup></option>
                      <option value={"6"}>6<sup>th</sup></option>
                      <option value={"7"}>7<sup>th</sup></option>
                      <option value={"8"}>8<sup>th</sup></option>
                    </Form.Select>
          </Form.Group>
          <Table responsive>
            <thead>
              <tr>
                <th>Peroid</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Group className="mb-3" controlId="formPeroidSelect">
                    <Form.Select onClick={(e) => setPeroid(e.target.value)}>
                      <option>Select Peroid</option>
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                      <option value={"5"}>5</option>
                      <option value={"6"}>6</option>
                      <option value={"7"}>7</option>
                      <option value={"8"}>8</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicMonday">
                    <Form.Select onClick={(e) => setMonday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicTuesday">
                    <Form.Select onClick={(e) => setTuesday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicWednesday">
                    <Form.Select onClick={(e) => setWednesday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicThursday">
                    <Form.Select onClick={(e) => setThursday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicFriday">
                    <Form.Select onClick={(e) => setFriday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3 " controlId="formBasicSaturday">
                    <Form.Select onClick={(e) => setSaturday(e.target.value)}>
                      <option>Select Subject</option>
                      <option value={"Hindi"}>Hindi</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Social Science"}>Social Science</option>
                      <option value={"Sanskirt"}>Sanskirt</option>
                      <option value={"Evs"}>Evs</option>
                      <option value={"Gk"}>Gk</option>
                      <option value={"Games"}>Games</option>
                    </Form.Select>
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button
            variant="outline-secondary"
            onClick={() => submitPeroid()}
            className={timeTable.length>7 ? "disabled d-block mx-auto my-2":"d-block mx-auto my-2"}
          >
            &nbsp; &nbsp; &nbsp;Add &nbsp; &nbsp; &nbsp;
          </Button>
        </Col>
        <Col md={6} xs={12} className="mt-3">
       <h5>Class Name :&nbsp;{timeTable.length>0? timeTable[0].standard:"   "}</h5>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Peroid</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              {timeTable ? (
                timeTable.map((sub) => {
                  return (
                    <tr key={sub.peroid}>
                      <td>
                        {sub.peroid}<sup>st</sup>
                      </td>
                      <td>{sub.monday}</td>
                      <td>{sub.tuesday}</td>
                      <td>{sub.wednesday}</td>
                      <td>{sub.thursday}</td>
                      <td>{sub.friday}</td>
                      <td>{sub.saturday}</td>
                    </tr>
                  );
                })
              ) : (
                <Loader />
              )}
             
            </tbody>
          </Table>
          <Button
            variant="outline-success"
            onClick={() => submitTable()}
            className={timeTable.length<8 ? "d-none":"d-block mx-auto my-2"}
          >
            &nbsp; &nbsp; &nbsp;Save &nbsp; &nbsp; &nbsp;
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TimeTable;
