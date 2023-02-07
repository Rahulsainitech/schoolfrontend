import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {registerUserReducer,registerFacultyReducer,loginStudentReducer,loginFacultyReducer,getAllUserReducer,getAllFacultyImgReducer,getAllStudentsReducer} from "./components/reducers/userReducer"
import { getAllImgReducer,getSplImgReducer,imagDelReducer,imageAddReducer } from "./components/reducers/imageReducer";
import { faqAddReducer, faqDelReducer, getAllFaqReducer,timeTableReducer,getClassTimeTableReducer } from "./components/reducers/faqReducer";
import { getAllNewsReducer, newsAddReducer, newsDelReducer } from "./components/reducers/newsReducer";
const currentUser = localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem('currentUser')):null

const rootReducers  = combineReducers({
    registerUserReducer:registerUserReducer,
    registerFacultyReducer:registerFacultyReducer,
    loginStudentReducer:loginStudentReducer,
    getAllUserReducer:getAllUserReducer,
    loginFacultyReducer:loginFacultyReducer,
    getAllStudentsReducer:getAllStudentsReducer,
    imageAddReducer:imageAddReducer,
    getAllImgReducer:getAllImgReducer,
    getSplImgReducer:getSplImgReducer,
    imagDelReducer:imagDelReducer,
    faqAddReducer:faqAddReducer,
    faqDelReducer:faqDelReducer,
    getAllFaqReducer:getAllFaqReducer,
    newsAddReducer:newsAddReducer,
    newsDelReducer:newsDelReducer,
    getAllNewsReducer:getAllNewsReducer,
    getAllFacultyImgReducer:getAllFacultyImgReducer,
    timeTableReducer:timeTableReducer,
    getClassTimeTableReducer:getClassTimeTableReducer
})

const intialState={
    loginUserReducer:{
        currentUser:currentUser,
    }
}


const middleware = [thunk];
const store = createStore(
    rootReducers,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))

);
export default store;