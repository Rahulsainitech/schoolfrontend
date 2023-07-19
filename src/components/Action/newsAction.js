import axios from "axios";
// import swal from "sweetalert2";

export const addNews=(newsInfo)=> async(dispatch)=>{
    dispatch({type:"NEWS_ADD_REQUEST"});
    console.log(newsInfo)
    try {
        const response=await axios.post("https://school-app-backend.onrender.com/api/news&event/news",newsInfo)
        dispatch({type:"NEWS_ADD_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"NEWS_EGISTER_FAIL",payload:error})
    }
    
}

export const delImage=(newsInfo)=> async(dispatch)=>{
    dispatch({type:"NEWS_DEL_REQUEST"});
    try {
        const response=await axios.post("https://school-app-backend.onrender.com/api/news&event/del",newsInfo)
        dispatch({type:"NEWS_DEL_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"NEWS_DEL_FAIL",payload:error})
    }
    
}

export const getAllNews=()=> async(dispatch)=>{
    dispatch({type:"GET_NEWS_REQUEST"});
    try {
        const response=await axios.get("https://school-app-backend.onrender.com/api/news&event/getallnews")
        dispatch({type:"GET_NEWS_SUCCESS",payload:response.data})
    } catch (error) {
        dispatch({type:"GET_NEWS_FAIL",payload:error})
    }
    
}