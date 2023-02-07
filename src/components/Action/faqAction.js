import axios from "axios";
// import swal from "sweetalert2";

export const addFaq=(faqInfo)=> async(dispatch)=>{
    dispatch({type:"FAQ_ADD_REQUEST"});
    console.log(faqInfo)
    try {
        const response=await axios.post("/api/faq/addfaq",faqInfo)
        dispatch({type:"FAQ_ADD_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"FAQ_EGISTER_FAIL",payload:error})
    }
    
}

export const delFaq=(newsInfo)=> async(dispatch)=>{
    dispatch({type:"FAQ_DEL_REQUEST"});
    try {
        const response=await axios.post("/api/faq/del",newsInfo)
        dispatch({type:"FAQ_DEL_SUCCESS",payload:response.data})
    } catch (error) {
        dispatch({type:"FAQ_DEL_FAIL",payload:error})
    }
    
}

export const getAllFaq=()=> async(dispatch)=>{
    dispatch({type:"FAQNEWS_REQUEST"});
    try {
        const response=await axios.get("/api/faq/getallfaq")
        dispatch({type:"FAQ_GET_SUCCESS",payload:response.data})
    } catch (error) {
        dispatch({type:"FAQ_GET_FAIL",payload:error})
    }
    
}