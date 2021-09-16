import React, { Component } from 'react'
import { connect } from 'react-redux'
import  UserScore  from './UserScore'

 class LeadBoard extends Component {
    render() {
       
        //    console.log(this.props.questions)
            return (
                <div className='home'>
            
            <ul className='dashboard-list'>
              {this.props.usersIds.map((id) => (
                <li key={id}>
                  <UserScore id={id} />
                </li>
              ))}
            </ul>
          </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
     usersIds: Object.keys(users)
    
    }
  }
  



export default connect(mapStateToProps)(LeadBoard)
