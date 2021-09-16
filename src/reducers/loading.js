import { SET_LOADING } from '../actions/loading'

export default function loadingStatus (state = null, action) {
  switch (action.status) {
    case SET_LOADING :
      console.log(action.status)
      return action.status
    default :
      return state
  }
}