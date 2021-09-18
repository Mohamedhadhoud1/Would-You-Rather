import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class QuestionResult extends Component {
  render() {
    const {authedUser,questions}=this.props
    const qids=Object.keys(questions)
if(authedUser && qids.includes(this.props.id)){
    console.log("iiiid",this.props.id,'qid : ',qids);
    const { users, questions, id, usersIds,authedUser } = this.props;
    const { timestamp, optionOne, optionTwo, author } = questions[id];
    const { avatarURL, name } = users[author];
    const allUsers = [...optionOne.votes, ...optionTwo.votes].length;
    
    console.log(optionOne);

    return (
      <div className='home'>
     <div className='resultUserInfo'>   <h4>Asked By {name}</h4>
        <img src={avatarURL} alt={users[author]} className="avatar" />
        </div>  <h2>Results :</h2>
        
          <div  style={optionOne.votes.includes(authedUser)? {"backgroundColor":"turquoise"}:{"borderTop":"2px solid black","borderBottom":"2px solid black"}}> 
          <h3>
         Would You Rather {optionOne.text} ?
          <div className="out">
            <div className="in" style={{"width":`${((optionOne.votes.length / allUsers) * 100)}%`,backgroundColor:"#37d828",height:"100%"}}>
              
              {((optionOne.votes.length / allUsers) * 100).toFixed(0)}%
            </div>
         
          </div>
          {optionOne.votes.length} out of {allUsers}
        </h3>
        </div>
        <div style={optionTwo.votes.includes(authedUser)? {"backgroundColor":"turquoise"}:{"borderTop":"2px solid black"}}>
        <h3>
            
        Would You Rather {optionTwo.text} ?
          <div className="out">
            <div className="in" style={{"width":`${((optionTwo.votes.length / allUsers) * 100)}%`,backgroundColor:"#37d828",height:"100%"}}>
             
              {((optionTwo.votes.length / allUsers) * 100).toFixed(0)}%
            </div>
          </div>
          {optionTwo.votes.length} out of {allUsers}
        </h3>
        </div>
      </div>
    );
}else{
  return <Redirect to='/NotFound' />
}
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id }=props.match.params
  usersIds: Object.keys(users);
  return {
    id,
    authedUser,
    users,
    questions,
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(QuestionResult);

//document.getElementById("black").setAttribute("style","border":"5px solid black")