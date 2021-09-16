import { SAVE_ANSWER,ADD_Question } from '../actions/questions'
import { RECEIVE_USERS } from '../actions/users'
import questions from './questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case SAVE_ANSWER:
        const {qid,answer}=action
        
        return{
          ...state,
          [action.authedUser]:{
          ...state[action.authedUser],
         answers:Object.assign({...state[action.authedUser].answers},{[qid]:answer})

          }
        }
          case ADD_Question:
            return{
            ...state,
          [action.authedUser]:{
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.qid)
        }
      }
    default :
      return state
  }
}