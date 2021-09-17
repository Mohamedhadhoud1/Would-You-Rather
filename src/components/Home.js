import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
   state={
       ans:false
   }
   handleAnswer =(A)=> {
        
        if (A==1) {this.setState(() => ({
            ans:true
          }))}
        else { 
        this.setState(() => ({
            ans:false
          }))
        }
     }
    render() {
       if(this.props.authedUser){
        console.log(this.props.questions)
        return (
            <div className='home'>
        <h3 className='center'>Your Timeline</h3>
      <div className='pro'> <button onClick={()=> this.handleAnswer(1)} className={this.state.ans===true?'active-btn btn-home':'btn-home'}>Answerd</button>  <button onClick={()=> this.handleAnswer(2)}className={this.state.ans===false?'active-btn btn-home':'btn-home'}>Not Answerd</button></div> 
        <ul className='dashboard-list'>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id} ans={this.state.ans} />
            </li>
          ))}
        </ul>
      </div>
        )
          }else{
            return(
            <div>You Are Not Authorized. Pleas Sign In</div>
            )}    }
}


function mapStateToProps ({ questions,authedUser }) {
    return {
     questionIds: Object.keys(questions)
     .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
     authedUser
      
    }
  }
  
  export default connect(mapStateToProps)(Home)