export const faqAddReducer = (state = {}, action) => {
    switch (action.type) {
      case "FAQ_ADD_REQUEST":
        return {
          loading: true,
        };
      case "FAQ_ADD_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "FAQ_ADD_FAIL":
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
  
  export const faqDelReducer = (state = {}, action) => {
    switch (action.type) {
      case "FAQ_DEL_REQUEST":
        return {
          loading: true,
        };
      case "FAQ_DEL_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload,
        };
      case "FAQ_DEL_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state ;
    }
  };
  
  export const getAllFaqReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "FAQ_GET_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "FAQ_GET_SUCCESS":
        return {
          allFaqQue: action.payload,
          loading:false
        };
      case "FAQ_GET_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };

  export const timeTableReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "TABLE_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "TABLE_SUCCESS":
        return {
          allFaqQue: action.payload,
          loading:false
        };
      case "TABLE_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };
  // getClassTimeTable

  export const getClassTimeTableReducer = (state = {users:[]}, action) => {
    switch (action.type) {
      case "GET_TABLE_REQUEST":
        return {
          ...state,
          loading:true
        };
      case "GET_TABLE_SUCCESS":
        return {
          allTimeTable: action.payload,
          loading:false
        };
      case "GET_TABLE_FAIL":
        return {
          error: action.payload,
          loading:false
        };
      default:
        return state;
    }
  };