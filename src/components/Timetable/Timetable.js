import React, { useEffect, useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { getClassTimeTable } from "../Action/timeTableAction";

const Timetable = () => {
  const [standard, setStandard] = useState("1");
  const [classtimetable,setClasstimetable]=useState(false)
  const dispatch = useDispatch()
  const timetable= useSelector(state=> state.getClassTimeTableReducer)
  const {allTimeTable}=timetable;

  useEffect(()=>{
    dispatch(getClassTimeTable())
  },[])
  useEffect(()=>{
    for (let i in allTimeTable) {
      if (allTimeTable[i].standard == standard) {
        return(
          setClasstimetable(allTimeTable[i])
        )
      }
    }
  },[standard])
  console.log("classtimetable",classtimetable)
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 col-4" controlId="formselectgender">
          <Form.Label>Select Class</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(event) => setStandard(event.target.value)}
          >
            <option>---Select Class---</option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
            {/* <option value="9">IX</option>
            <option value="X">X</option> */}
          </Form.Select>
        </Form.Group>
      </Form>
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
         {
          classtimetable && classtimetable.classTimeTable.map(data=>{return( 
            <tr key={data.peroid}>
            <td>
              {data.peroid}<sup>st</sup>
            </td>
            <td>{data.monday}</td>
            <td>{data.tuesday}</td>
            <td>{data.wednesday}</td>
            <td>{data.thursday}</td>
            <td>{data.friday}</td>
            <td>{data.saturday}</td>
          </tr>)})
         }
          {/* <tr>
            <td>
              II<sup>st</sup>
            </td>
            <td>Hindi</td>
            <td>English</td>
            <td>Math</td>
            <td>E.V.S</td>
            <td>Games</td>
            <td>G.K</td>
          </tr>
          <tr>
            <td>
              III<sup>st</sup>
            </td>
            <td>English</td>
            <td>Math</td>
            <td>Math</td>
            <td>Hindi</td>
            <td>Hindi</td>
            <td>G.K</td>
          </tr>
          <tr>
            <td>
              IV<sup>st</sup>
            </td>
            <td>Games</td>
            <td>Math</td>
            <td>English</td>
            <td>Hindi</td>
            <td>G.K</td>
            <td>Hindi</td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  );
};

export default Timetable;
