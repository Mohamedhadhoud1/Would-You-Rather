//import { _getQuestions, _getUsers } from "../../_DATA
import { getInitialData } from '../api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from '../actions/authedUser'
import { loadingStatus } from './loading'
const AUTHED_ID = null

export function handleInitialData () {
    return (dispatch) => {
      dispatch(loadingStatus('loading'))
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(receiveQuestions(questions))
          dispatch(receiveUsers(users))
         
          dispatch(setAuthedUser(AUTHED_ID))
          dispatch(loadingStatus('success'))
        })
    }
  }