import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFaculty } from "../Action/userAction";
import Loader from "../Warning/Loader";
import Error from "../Warning/Error";
import { Table,Image,Container} from "react-bootstrap";
// import { deleteUserById } from "../Action/userAction";
// import { addAdmin } from "../Action/userAction";
import {AiFillPhone} from "react-icons/ai";
import {GrMailOption} from "react-icons/gr";
import {NavLink} from "react-router-dom"
// import Faculty from "../Profile/Faculty";

const Userlist = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUserReducer);
  const { users, error, loading } = userState;
  console.log("sare users",users)
  useEffect(() => {
    dispatch(getAllFaculty());
  }, [dispatch]);

  return (
    <Container>
      {error && <Error error={"error while loading users :" + error} />}
      {loading && <Loader />}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center">Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>For more info..</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="text-center"><Image src={user.url} alt={user.name} style={{width:"80px",height:"100px"}}/></td>
                  <td className="text-capitalize">{user.name}</td>
                  <td>{user.phone}<a href={"tel:+91"+user.phone}>&nbsp;&nbsp;<kbd className="text-white"><AiFillPhone/></kbd></a></td>
                  <td>{user.email}<a href={"mailto:"+user.email}>&nbsp;&nbsp;<kbd className="text-white"><GrMailOption/></kbd></a></td>
                  {/* <td>{user.createdAt.substring(0, 10)}</td> */}
                  <td>
                    <NavLink to={"/facultyprofile/"+user._id}><kbd>Click here...</kbd></NavLink>
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
