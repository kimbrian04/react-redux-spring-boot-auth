import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import {
    setSignUpEmail,
    setSignUpName,
    setSignUpPassword,
    setSignUpPasswordConfirm,
    setSignUpUsername
} from '../../actions/signup'

import { signupUser } from '../../thunks/signup'

const SignUpContainer = styled.div`

`

class SignUp extends React.Component {
    render() {
        let { formData, isAuthenticated } = this.props

        if (isAuthenticated === true) {
            return (
                <Redirect to='/' /> // Redirect to Home page if logged in already
            )
        }

        return (
            <SignUpContainer>
                <div>
                    Already a member? <Link to='/login'>Log In</Link> Now
                </div>
                <form>
                    <label>Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={this.props.onNameChange} />

                    <br/>

                    <label>Username</label>
                    <input 
                        type='text'
                        name='name'
                        value={formData.username}
                        onChange={this.props.onUsernameChange} />

                    <br/>

                    <label>Email</label>
                    <input 
                        type='text'
                        name='name'
                        value={formData.email}
                        onChange={this.props.onEmailChange} />

                    <br/>

                    <label>Password</label>
                    <input
                        type='password'
                        name='name'
                        value={formData.password}
                        onChange={this.props.onPasswordChange} />

                    <br/>

                    <label>Confirm Password</label>
                    <input 
                        type='password'
                        name='name'
                        value={formData.confirmPassword}
                        onChange={this.props.onPasswordConfirmChange} />
                    <br/>

                    <button 
                        type='button'
                        onClick={this.props.onSignUpButtonClick}>
                        
                        Sign Up
                    </button>
                </form>
            </SignUpContainer>
        )
    }
}

const mapStateToProps = state => ({
    formData: state.signup,
    isAuthenticated: state.user.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    onNameChange: (e) => dispatch(setSignUpName(e.target.value)),
    onUsernameChange: (e) => dispatch(setSignUpUsername(e.target.value)),
    onEmailChange: (e) => dispatch(setSignUpEmail(e.target.value)),
    onPasswordChange: (e) => dispatch(setSignUpPassword(e.target.value)),
    onPasswordConfirmChange: (e) => dispatch(setSignUpPasswordConfirm(e.target.value)),
    onSignUpButtonClick: () => dispatch(signupUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)