import axios from "axios";
import swal from "sweetalert2";
export const registerStudent = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response=await axios.post("/api/student/studentregister",user);
    dispatch({ type: "USER_REGISTER_SUCCESS",payload:response.data });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};
export const loginStudent = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/student/login", user);
    console.log("rahul",response)
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    if (response.status==400){
      alert("User not found")
    }
    
    window.location.href = "/studentprofile/"+response.data._id;
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutStudent = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/mainlogin";
};

export const getAllFaculty = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const res = await axios.get("/api/faculty/getallusers");
    console.log("all usere",res);
    dispatch({ type: "GET_USER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_FAIL", payload: error });
  }
};

export const getAllFacultyImages = () => async (dispatch) => {
  dispatch({ type: "GET_FIMG_REQUEST" });
  try {
    const res = await axios.get("/api/faculty/getallfacultyimages");
    console.log("all usere",res);
    dispatch({ type: "GET_FIMG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_FIMG_FAIL", payload: error });
  }
};

export const getAllStudents = () => async (dispatch) => {
  dispatch({ type: "GET_STD_REQUEST" });
  try {
    const res = await axios.get("/api/student/getallstudents");
    console.log("all usere",res);
    dispatch({ type: "GET_STD_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_STD_FAIL", payload: error });
  }
};
export const filterStudent = (searchKey,category)=>async(dispatch)=>{
  let filterdstudents;
  dispatch({type:"GET_STD_REQUEST"})
      try {
          const res = await axios.get("/api/student/getallstudents")
          filterdstudents = res.data.filter((student)=>{
                 return( student.name.toLowerCase().includes(searchKey))
          });
          if (category!=="all"){
              filterdstudents = res.data.filter((student)=>{
                  return( student.cls===category)
           });
          }
          dispatch({type:"GET_STD_SUCCESS",payload:filterdstudents})
      } catch (error) {
          dispatch({type:"GET_STD_FAIL",payload:error})
      }
}

export const deleteUserById = (userId) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userId });
    swal("User Delete Successfully", "success");
    window.location.reload();
  } catch (error) {
    swal("Error while deleting the User");
  }
};

export const addAdmin = (userid) => async (dispatch) => {
  dispatch({
    type: "Add_ADMIN_REQUEST",
  });
  try {
    const response = await axios.post("/api/faculty/addnewadmin", { userid });
    swal("Successfully update on admin acess", "success");
    console.log(response);
    dispatch({ type: "Add_ADMIN_SUCCESS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "Add_ADMIN_FAIL", payload: error });
  }
};

export const facultyRegister = (user) => async (dispatch) => {
  dispatch({ type: "FACULTY_REGISTER_REQUEST" });
  try {
    // console.log("rahul achha", user)
    const response=await axios.post("/api/faculty/facultyregister",user);
    dispatch({ type: "FACULTY_REGISTER_SUCCESS",payload:response.data });
  } catch (error) {
    dispatch({ type: "FACULTY_REGISTER_FAIL", payload: error });
  }
};
export const facultyLogin = (user) => async (dispatch) => {
  dispatch({ type: "FACULTY_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/faculty/login", user);
    console.log("rahul",user)
    dispatch({ type: "FACULTY_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/admin";
  } catch (error) {
    dispatch({ type: "FACULTY_LOGIN_FAIL", payload: error });
  }
};