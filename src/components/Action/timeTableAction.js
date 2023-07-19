import axios from "axios";
export const classTimeTable = (user) => async (dispatch) => {
    dispatch({ type: "TABLE_REQUEST" });
    try {
      const response = await axios.post("https://school-app-backend.onrender.com/api/faq/timetable", user);
      console.log("rahul",user)
      dispatch({ type: "TABLE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "TABLE_FAIL", payload: error });
    }
  };

  export const getClassTimeTable = () => async (dispatch) => {
    dispatch({ type: "GET_TABLE_REQUEST" });
    try {
      const response = await axios.get("https://school-app-backend.onrender.com/api/faq/timetable");
      // console.log("rahul",user)
      dispatch({ type: "GET_TABLE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_TABLE_FAIL", payload: error });
    }
  };