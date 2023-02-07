export const imageAddReducer = (state = {}, action) => {
    switch (action.type) {
      case "IMAGE_ADD_REQUEST":
        return {
          loading: true,
        };
      case "IMAGE_ADD_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "IMAGE_ADD_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return {
          state,
        };
    }
  };
  
  export const imagDelReducer = (state = {}, action) => {
    switch (action.type) {
      case "IMG_DEL_REQUEST":
        return {
          loading1: true,
        };
      case "IMG_DEL_SUCCESS":
        return {
          loading1: false,
          success: true,
          currentUser: action.payload,
        };
      case "IMG_DEL_FAIL":
        return {
          loading1: false,
          error: action.payload,
        };
      default:
        return state ;
    }
  };
  
  export const getAllImgReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "GET_IMG_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "GET_IMG_SUCCESS":
        return {
          allimages: action.payload,
          loading:false
        };
      case "GET_IMG_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };

  export const getSplImgReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "GET_SPL_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "GET_SPL_SUCCESS":
        return {
          allimages: action.payload,
          loading:false
        };
      case "GET_SPL_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };