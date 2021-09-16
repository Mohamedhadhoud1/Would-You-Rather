import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
class NewQuestion extends Component {
    state = {
        text1: '',
       text2:'',
       clicked:false
      }
      handleChange1 = (e) => {
        const text1 = e.target.value
    
        this.setState(() => ({
          text1
        }))
      }
      handleChange2 = (e) => {
        const text2 = e.target.value
    
        this.setState(() => ({
          text2
        }))
      }
      handleSubmit = (e) => {
        e.preventDefault()
    
        const { text1,text2,clicked } = this.state
       
        const {dispatch} = this.props
console.log(text1,text2)
        dispatch(handleAddQuestion(text1,text2))
    
        this.setState(() => ({
          text1: '',
          text2:'',
          clicked:true
        }))
       
      }

      
    render() {
      if(this.state.clicked===true){
        
        return <Redirect to='/' />
      }
        const { text1, text2} =this.state
        return (
            <div className='NQ'>
                  <h2 className='center'>Compose new Question</h2><div className='line'></div>
        <form className='new-question' onSubmit={this.handleSubmit}>
        <h3 className='c'>Would you Rather</h3>
          <textarea
            placeholder="Option One"
            value={text1}
            onChange={this.handleChange1}
            className='textarea c'
            maxLength={100}
          />
          <h3 className="c">Or</h3>
           <textarea 
            placeholder="Option Two"
            value={text2}
            onChange={this.handleChange2}
            className='textarea c'
            maxLength={100}
          />
          <button
            className='btn c'
            type='submit'
            disabled={this.props.authedUser===null || text1==='' || text2===''}>
              Submit
          </button>
          </form>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
  return {
      authedUser

}
}

export default connect(mapStateToProps)(NewQuestion)
