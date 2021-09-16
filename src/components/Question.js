import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../_DATA'
import {Link} from 'react-router-dom'

class Question extends Component {
    render() {
        
        //console.log(this.props)
        const { question,users,authedUser } = this.props
       
        const {id, timestamp, optionOne, optionTwo, author  } = question
  const { avatarURL,name }= users[author]
  const {answers}=users[authedUser]
  const answerd = Object.keys(answers)

        console.log("id=",id,answerd)// answerd.map((answer)=> (answer===id)))
        return (
            <div className='question-container'>
            
         
            {   (answerd.includes(id)) === this.props.ans   && (
                <div className='question'>
              <div className='user-info'> <h4>{name}</h4>
                <img 
                src={avatarURL}
                alt={users[author]}
                className='avatar' /></div> 
                <div className='Q-info'>
                <h3>would you rather</h3>
                <h5 className='h5'>{optionOne.text}</h5>
                <h5 className='h5-bottom'>{optionTwo.text}</h5>
                <Link className='Qbtn' to={this.props.ans?`/question/${id}/QuestionResult`:`/question/${id}`} >View</Link>
                </div>
            </div>
                 )}
                 </div>
        )       
    }
}

function mapStateToProps ({authedUser,users,questions},{id}) {
    const question = questions[id]
    return {
        authedUser,
        users,
        question,

}
}


export default connect(mapStateToProps)(Question)
