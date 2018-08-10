import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'

import ProtectedRoute from './components/shared/protectedRoute'

import {
  getCurrentUser
} from './thunks/user'



const HeaderDiv = styled.div`
  background-color: black;
  height: 100px;
  width: 100%;
`

const ContentDiv = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 15px;
`

class App extends Component {
  componentWillMount = () => {
    this.props.getCurrentUser()
  }

  render() {
    const { user } = this.props
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderDiv>
            <li><Link to='/'>Home</Link></li>
          </HeaderDiv>
          <ContentDiv>
              <ProtectedRoute exact path='/' component={Home} isAuthenticated={user.isAuthenticated} /*render={(props) => <Home/>}*/ />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
          </ContentDiv>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
