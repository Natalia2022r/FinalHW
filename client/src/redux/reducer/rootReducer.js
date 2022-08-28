import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  usersReducer,
  postReducer,
});
export default rootReducer;
