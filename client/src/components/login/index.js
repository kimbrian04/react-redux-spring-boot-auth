import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import {
    setLogInPassword,
    setLogInUsernameOrEmail
} from '../../actions/login'

import { handleLogIn } from '../../thunks/login'

const LoginContainer = styled.div`
    
`

class Login extends React.Component {
    render() {
        let { formData, user } = this.props

        if (user.isAuthenticated === true) {
            const { from } = this.props.location.state || { from: { pathname: '/' }}
            console.log(from)
            return (
                <Redirect to={from} />
            )
        }
            
        return (
            <LoginContainer>
                <form>
                    <label htmlFor='username'>UserName/Email:</label>
                    <input
                        type='text'
                        name='username'
                        value={formData.usernameOrEmail}
                        onChange={this.props.onUsernameChange} />

                    <br/>
                    
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={this.props.onPasswordChange} />

                    <br/>

                    <button
                        type='button'
                        onClick={this.props.handleLogIn}>
                        
                        Log In
                    </button> 
                    
                    <br/>
                    
                    
                </form>
                Don't have an accout? <Link to='/signup'>Sign Up</Link> Now
            </LoginContainer>
        )
    }
}

const mapStateToProps = state => ({
    formData: state.login,
    user: state.user
})

const mapDispatchtoProps = dispatch => ({
    onUsernameChange: (e) => dispatch(setLogInUsernameOrEmail(e.target.value)),
    onPasswordChange: (e) => dispatch(setLogInPassword(e.target.value)),
    handleLogIn: () => dispatch(handleLogIn())
})

export default connect(mapStateToProps, mapDispatchtoProps)(Login)