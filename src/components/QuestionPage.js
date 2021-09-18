import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveAnswer} from '../actions/questions'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
state={
answer:'',
clicked:false
}
  handleChange = e => {
    const {  value } = e.target;
    this.setState({
     answer:value
    });
  };
  
  handelAnswer = (e) => {
    this.setState({
      clicked:true
     });
    e.preventDefault()
    const { dispatch, authedUser,id } = this.props
    const {answer}=this.state
    
    console.log("11111",id,answer)
    dispatch(handleSaveAnswer(
      authedUser,
      id,
      answer
    ))
    
    
  }

  render() {
    const {authedUser,questions}=this.props
    const qids=Object.keys(questions)
if(authedUser && qids.includes(this.props.id)){
        console.log('iddddddd',this.props.id)
        const { questions,users,id }=this.props
        const {timestamp, optionOne, optionTwo, author  } = questions[id]
        console.log("5555",questions[id]) 
        const avatarURL= `${users[author].avatarURL}`
  const name = users[author].name
  const {answers}=users['johndoe']
  const answerd = Object.keys(answers)
   console.log("6666",users[author].avatarURL)
   if(this.state.clicked===true){
    return  <Redirect to={`/question/QuestionResult/${id}`} />
  }
        return (
            <div className='home'>
                <div className='user-info'>
                  <h4>{name}</h4>
                <img 
                src={avatarURL}
                alt={users[author]}
                className='avatar' />
               </div>
                    <div className='Q-info'>
                <h3>would you rather</h3>
                <div>
                <input type="radio" id={optionOne.text} name="fav" value='optionOne' onChange={this.handleChange} />
                <label htmlFor={optionOne.text}>{optionOne.text}</label><br />
                <input type="radio" id={optionTwo.text} name="fav" value='optionTwo' onChange={this.handleChange} />
                <label htmlFor={optionTwo.text}>{optionTwo.text}</label><br />
               <button className='Qbtn' onClick={this.handelAnswer} disabled={this.state.answer===''} >Submit</button>
                </div>
                </div>
                
                
       
            </div>
        );
      }else{
        return <Redirect to='/NotFound' />
      }
  }
}

function mapStateToProps ({authedUser,users,questions},props) {
  const { id }=props.match.params
  //  const question = questions[id]
    return {
        id,
        authedUser,
        users,
        questions,

}
}


export default connect(mapStateToProps)(QuestionPage)
