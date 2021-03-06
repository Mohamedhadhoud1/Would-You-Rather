import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import LoadingBar from 'react-redux-loading-bar'
import  QuestionPage  from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeadBoard from './LeadBoard'
import Login from './Login'
import  QuestionResult  from './QuestionResult'
import Nav from './Nav'
import NotFound from './NotFound'
//import loadingStatus from '../reducers/loading'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
 
  render() {
    const {authedUser}=this.props
   
    return (
      <Router>
      <Fragment>
        <LoadingBar />
      <div className='container'>
      
    
       <Nav />
         {this.props.loading === 'loading'
           ? <div className='loader'></div>
           : 
<div>
<Switch>
{ authedUser ? (
<Fragment>  
  
       <Route path='/home' exact component={Home} />
       <Route exact path='/question/:id' component={QuestionPage} />
       <Route path='/add' component={NewQuestion} />
       <Route path='/leadBoard' component={LeadBoard} />
       <Route exact path='/' component={Login} />
       <Route exact path='/question/QuestionResult/:id' component={QuestionResult} />
       <Route path='/NotFound' component={NotFound} />
       </Fragment>
):(
  <Fragment>
<Route path='/' component={Login} />
  
  </Fragment>
)}

    </Switch>
     </div>}
     </div>
     </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser,users,loadingStatus }) {
  return {
    loading: loadingStatus === 'loading' ,
    authedUser
    
    
  }
}

export default connect(mapStateToProps)(App)