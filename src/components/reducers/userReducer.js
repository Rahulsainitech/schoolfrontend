export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAIL":
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
export const registerFacultyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FACULTY_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "FACULTY_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "FACULTY_REGISTER_FAIL":
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
export const loginStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state ;
  }
};

export const getAllUserReducer = (state = {users:[]}, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "GET_USER_SUCCESS":
      return {
        users: action.payload,
        loading:false
      };
    case "GET_USER_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export const getAllFacultyImgReducer = (state = {users:[]}, action) => {
  switch (action.type) {
    case "GET_FIMG_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "GET_FIMG_SUCCESS":
      return {
        users: action.payload,
        loading:false
      };
    case "GET_FIMG_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};
export const getAllStudentsReducer = (state = {users:[]}, action) => {
  switch (action.type) {
    case "GET_STD_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "GET_STD_SUCCESS":
      return {
        users: action.payload,
        loading:false
      };
    case "GET_STD_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export const loginFacultyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FACULTY_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "FACULTY_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "FACULTY_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state ;
  }
};