import React, { Component } from 'react'
import { connect } from 'react-redux'
import  UserScore  from './UserScore'

 class LeadBoard extends Component {
    render() {
      console.log('0',this.props.usersIds)
            return (
                <div className='home'>
            
            <ul className='dashboard-list'>
              {this.props.usersIds.map((id) => {
                
return(
                <li key={id}>
                  <UserScore id={id} />
                </li>)
    })}
            </ul>
          </div>
        )
    }
}

function mapStateToProps ({ users }) {
  let score1
 let score2
 let score3
   let usersIds=Object.keys(users)
  for (let i=0;i<3;i++){
    const {answers,questions}=users[usersIds[i]]
   if(i===0) score1=Object.keys(answers).length+questions.length
   if(i===1) score2=Object.keys(answers).length+questions.length
   if(i===2) score3=Object.keys(answers).length+questions.length
  }
   const numbers=[{name:'sarahedo',score:score1} , {name:'tylermcginnis',score:score2},{name:'johndoe',score:score3}]

   let highestToLowest = numbers.sort((a, b) => b.score-a.score);
  
   usersIds[0]= highestToLowest[0].name 
   usersIds[1]= highestToLowest[1].name 
   usersIds[2]= highestToLowest[2].name 

 

    return {
     usersIds,
    score1,
    }
  }
  



export default connect(mapStateToProps)(LeadBoard)

 