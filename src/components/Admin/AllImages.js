import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllImage,delImage } from "../Action/imageAction";
import Loader from "../Warning/Loader";
import Error from "../Warning/Error";
import { Table,Image,Container} from "react-bootstrap";
// import { deleteUserById } from "../Action/userAction";
// import { addAdmin } from "../Action/userAction";
// import {AiFillPhone} from "react-icons/ai";
// import {GrMailOption} from "react-icons/gr";
// import {NavLink} from "react-router-dom"
// import Swal from "sweetalert2";
// import cloudinary from "cloudinary/lib";
// import { imagDelReducer } from "../reducers/imageReducer";
// import Faculty from "../Profile/Faculty";


const AllGallery = () => {

 

    const dispatch = useDispatch()
    const userState = useSelector(state=>state.getAllImgReducer)
    const imagedelState=useSelector(state=>state.imagDelReducer)
    const {success,loading1}=imagedelState;
    const { allimages, error, loading } = userState;
    const {check,setCheck}=useState(false)

    

    const deleteImage = async (e,id,public_id) => {
      e.preventDefault();
      dispatch(delImage({"id":id,"public_id":public_id}))  
  }
  
    console.log(allimages)
    useEffect(() => {
      dispatch( getAllImage())
    }, []);

  return (
    <Container>
      {error && <Error error={"error while loading users :" + error} />}
      {loading1 || loading && <Loader />}
      <Table striped bordered hover responsive className="my-3">
        <thead>
          <tr>
            <th className="text-center">Photo</th>
            <th>Category</th>
            <th>Discription</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {allimages &&
            allimages.map((img) => {
              return (
                <tr key={img._id}>
                  <td className="text-center"><Image src={img.image} alt={img.name} style={{width:"80px",height:"100px"}}/></td>
                  <td className="text-capitalize">{img.category}</td>
                  <td>{img.description}</td>
                  <td><kbd onClick={(e)=>deleteImage(e,img._id,img.public_id)} style={{cursor:"pointer"}}>delete</kbd></td>
                  <td><kbd>edit</kbd></td>
                  {/* <td>{img.createdAt.substring(0, 10)}</td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllGallery;
