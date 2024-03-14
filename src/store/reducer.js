import { combineReducers } from "redux";
// import userReducer from "./../user-management/duck/reducer";
// import movieBookingReducer from "./../movieBooking/duck/reducer";
import { QuanLySinhVienReducer } from "./../redux/reducers/QuanLySinhVienReducer"

const rootReducer = combineReducers({
    //(object) quản lý các child reducers
    //key:value
    // userReducer, //userReducer: userReducer
    // movieBookingReducer, 
    QuanLySinhVienReducer,
});

export {rootReducer};

