export const newsAddReducer = (state = {}, action) => {
    switch (action.type) {
      case "NEWS_ADD_REQUEST":
        return {
          loading: true,
        };
      case "NEWS_ADD_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "NEWS_ADD_FAIL":
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
  
  export const newsDelReducer = (state = {}, action) => {
    switch (action.type) {
      case "NEWS_DEL_REQUEST":
        return {
          loading: true,
        };
      case "NEWS_DEL_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload,
        };
      case "NEWS_DEL_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state ;
    }
  };
  
  export const getAllNewsReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "GET_NEWS_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "GET_NEWS_SUCCESS":
        return {
          allnews: action.payload,
          loading:false
        };
      case "GET_NEWS_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };