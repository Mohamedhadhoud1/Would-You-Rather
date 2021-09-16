import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from "react-redux-loading-bar";
import  loadingStatus  from './loading';
export default combineReducers({
  authedUser,
  users,
  questions,
  loadingStatus,
  loadingBar: loadingBarReducer
})