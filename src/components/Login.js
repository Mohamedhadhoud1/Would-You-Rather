import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import  {Dropdown}  from "semantic-ui-react";
import { setAuthedUser } from '../actions/authedUser';
import { Redirect, withRouter } from 'react-router-dom'

 class Login extends Component {
state={
  currentUser:null,
  clicked:false

}
handleSubmit=(e)=>{
  
  e.preventDefault();
  console.log('id in login paign AAAAAAAAAAAAAAAAAAAAAAAa',this.state.currentUser)
this.props.dispatch(setAuthedUser(this.state.currentUser))
this.setState({
  
  clicked:true
})
}
    render() {
     const isDisabled=() => (this.state.currentUser===null)
    
     const handleChoose=(id)=>{
     console.log(id)
      this.setState({
        currentUser:id
       
      })
    }
if(this.props.authedUser){
      return <Redirect to='/home' />
    }
  
        const {users}=this.props
     //  console .log(users.avatarURL)
     
        return (
          



              
<React.Fragment>

  
           <form className="form">  
             <h2 className="c">Welcome</h2>
             <h3 className="c">Sign In</h3>
   <Dropdown
   icon={this.state.currentUser===null?"add user":<img className='icon l' src={this.props.users[this.state.currentUser].avatarURL} />}
    text={this.state.currentUser===null?'Choose User':this.state.currentUser}
    
    floating
    labeled
    button
    className="icon c"
  >
    <Dropdown.Menu>
      <Dropdown.Header content="People You Might Know" />
      {this.props.usersIds.map((id) => (
        <Dropdown.Item key={id} text={id} value={id} onClick={()=>handleChoose(id)} image={{
          avatar:true,
          src:`${users[id].avatarURL}`
        }} />
      ))}
    </Dropdown.Menu>
  </Dropdown>
  <button className="btn c" disabled={isDisabled()} onClick={this.handleSubmit}>Submit</button>
  </form> 
    </React.Fragment>
 





            
        )
    }
}

function mapStateToProps ({ users,authedUser }) {
    return {
     usersIds: Object.keys(users),
     users,
     authedUser
    }
  }


export default withRouter(connect(mapStateToProps)(Login))

/*
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);*/

{/* <option key={id} value={id} style={{ backgroundImage: "url(" + `${users[id].avatarURL}`+ ")"}}>
               {id}</option>*/}