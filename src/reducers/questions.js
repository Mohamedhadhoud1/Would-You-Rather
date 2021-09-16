import { ADD_Question, RECEIVE_Questions, SAVE_ANSWER } from '../actions/questions'
//import { RECEIVE_Questions, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_Questions :
      return {
        ...state,
        ...action.questions
      }
      case SAVE_ANSWER :
      //  const { optionOne,optionTwo } = action
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne:{
            ...state[action.qid].optionOne,
            votes: action.answer==='optionOne'
          ? state[action.qid].optionOne.votes.concat(action.authedUser)
          :  state[action.qid].optionOne.votes
          },
          optionTwo:{
            ...state[action.qid].optionTwo,
          votes: action.answer==='optionTwo'
          ? state[action.qid].optionTwo.votes.concat(action.authedUser)
          : state[action.qid].optionTwo.votes
        }
      }
    }
    case ADD_Question :
      const { question } = action

  
      return {
        ...state,
        [question.id]: question,
          
      }
   default :
      return state
  }
}