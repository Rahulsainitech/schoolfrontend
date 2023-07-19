import axios from "axios";
// import swal from "sweetalert2";

export const addNewImage=(picInfo)=> async(dispatch)=>{
    dispatch({type:"IMAGE_ADD_REQUEST"});
    try {
        const response=await axios.post("https://school-app-backend.onrender.com/api/gallery/pic",picInfo)
        console.log(picInfo,"img data")
        dispatch({type:"IMAGE_ADD_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"IMAGE_REGISTER_FAIL",payload:error})
    }
    
}

export const delImage=(picInfo)=> async(dispatch)=>{
    dispatch({type:"IMG_DEL_REQUEST"});
    try {
        const response=await axios.post("https://school-app-backend.onrender.com/api/gallery/delimage",picInfo)
        console.log("del pic",picInfo)
        dispatch({type:"IMG_DEL_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"IMG_DEL_FAIL",payload:error})
    }
    
}

export const getAllImage=()=> async(dispatch)=>{
    dispatch({type:"GET_IMG_REQUEST"});
    try {
        const response=await axios.get("https://school-app-backend.onrender.com/api/gallery/getallpic")
        dispatch({type:"GET_IMG_SUCCESS",payload:response.data})
    } catch (error) {
        dispatch({type:"GET_IMG_FAIL",payload:error})
    }
    
}
export const getSplImage=()=> async(dispatch)=>{
    dispatch({type:"GET_SPL_REQUEST"});
    try {
        const response=await axios.get("https://school-app-backend.onrender.com/api/gallery/getsplpic")
        dispatch({type:"GET_SPL_SUCCESS",payload:response})
    } catch (error) {
        dispatch({type:"GET_SPL_FAIL",payload:error})
    }
    
}
export const filterGallery = (category)=>async(dispatch)=>{
    let filterdImage;
    dispatch({type:"GET_IMG_REQUEST"})
        try {
            const response=await axios.get("https://school-app-backend.onrender.com/api/gallery/getallpic")
                filterdImage = response.data.filter((img)=>{
                    return( img.category===category)
             });
            
            dispatch({type:"GET_IMG_SUCCESS",payload:filterdImage})
        } catch (error) {
            dispatch({type:"GET_IMG_FAIL",payload:error})
        }
}