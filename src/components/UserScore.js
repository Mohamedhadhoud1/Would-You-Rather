import React, { Component } from 'react'
import { connect } from 'react-redux'

 class UserScore extends Component {
    render() {
        console.log(this.props)
        const { question,user } = this.props
       // const {id, timestamp, optionOne, optionTwo, author  } = question
         const { avatarURL,name , answers, questions}= user
        const answersarr=Object.keys(answers)

         console.log(answersarr.length)
        return (
            
            <div className='question'>
            <div className='user-info'>
                  <h4>{name}</h4>
                <img 
                src={avatarURL}
                alt={user}
                className='avatar' />
                </div>
                <div className='Q-info'>
                <h3>Answerd Questions     {answersarr.length}</h3>
                <h3>Created Questions      {questions.length}</h3>
                <div className='score'> <h3 className='h3score'>Score:{answersarr.length+questions.length}</h3></div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps ({authedUser,users,questions},{id}) {
    const user= users[id]
    return {
        authedUser,
        user,
        questions,

}
}

export default connect(mapStateToProps)(UserScore)
