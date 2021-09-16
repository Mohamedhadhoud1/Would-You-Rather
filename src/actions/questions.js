import { saveQuestion, saveQuestionAnswer } from "../api"
import { showLoading,hideLoading } from "react-redux-loading-bar"

export const RECEIVE_Questions = 'RECEIVE_Questions'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_Question = 'ADD_Question'

function addQuestion (question,authedUser){
  return{
    type: ADD_Question,
    question,
    authedUser
  }
}

export function handleAddQuestion (optionOneText,optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
      
    })
      .then((question) => dispatch(addQuestion(question,authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_Questions,
      questions,
    }
  }

  function saveAnswer (authedUser, qid,answer ){
    return {
      type: SAVE_ANSWER,
      authedUser,
      qid,
      answer
    }
  }

  export function handleSaveAnswer (authedUser,qid,answer) {
    return (dispatch) => {

      dispatch(showLoading())
      console.log("Authed User:",authedUser,"Question id:",qid,"Answer:",answer)
      return saveQuestionAnswer({
       authedUser,
        qid,
        answer
       
        
      })
      
        .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
       // .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
        .then(() => dispatch(hideLoading()))
        
    }
  }