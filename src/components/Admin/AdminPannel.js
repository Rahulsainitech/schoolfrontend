import React, { useEffect } from "react";

import Swal from "sweetalert2";
// import { useSelector } from "react-redux";
import Userlist from "./Facultylist";
import AdminNav from "./AdminNav";

const AdminPannel = () => {

  // const userState = useSelector((state) => state.loginFacultyReducer);
  // const { currentUser } = userState;
  // console.log("m current user hu",currentUser)
  
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Either you have not logged in or you do not have admin access',
        
      })
      window.location.href = "/";
    }
  }, []);
  return (
    <>
     <AdminNav/>
     <Userlist/>
    </>
  );
};

export default AdminPannel;
