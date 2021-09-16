import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
export class Nav extends Component {
  RemoveAurhor=()=>{
    this.props.dispatch(setAuthedUser(null))
  }
    render() {
        const {authedUser,users}=this.props
        //const { avatarURL,name }= users[authedUser]
       // console.log(avatarURL)
        return (
          <nav className='nav'>
            <ul>
              <li className='nav-li'>
                <NavLink to='/' exact  activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink to='/new' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink to='/LeadBoard' activeClassName='active'>
                  Lead Board
                </NavLink>
              </li>
              <li className='nav-li'>
               <div className='user'> <p className='p'>  Hello {authedUser} </p>
                  <img 
                      src={authedUser?users[authedUser].avatarURL:''} 
                      alt={authedUser}
                      className='avatarlog' /></div>
              </li>
              <li className='nav-li-last'>
                { authedUser?
                
                <NavLink to='/signin' activeClassName='active' onClick={this.RemoveAurhor}>
                  Log Out
                </NavLink>
              : 
              <NavLink to='/signin' activeClassName='active' onClick={this.RemoveAurhor}>
              Log in
            </NavLink>}

              </li>
            </ul>
            
          </nav>
        )    
}
}



function mapStateToProps ({ authedUser,users }) {
    return {
     authedUser,
     users
    }
  }
  
  export default connect(mapStateToProps)(Nav)