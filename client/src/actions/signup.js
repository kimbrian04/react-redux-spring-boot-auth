import {
    SET_SIGN_UP_NAME,
    SET_SIGN_UP_USERNAME, 
    SET_SIGN_UP_EMAIL, 
    SET_SIGN_UP_PASSWORD, 
    SET_SIGN_UP_PASSWORD_CONFIRM,
    SET_SIGN_UP_LOADING,
    SET_SIGN_UP_NOT_LOADING
} from '../constants/actionTypes'

export const setSignUpName = (name) => ({
    type: SET_SIGN_UP_NAME,
    value: name
})

export const setSignUpUsername = (username) => ({
    type: SET_SIGN_UP_USERNAME,
    value: username
})

export const setSignUpEmail = (email) => ({
    type: SET_SIGN_UP_EMAIL,
    value: email
})

export const setSignUpPassword = (password) => ({
    type: SET_SIGN_UP_PASSWORD,
    value: password
})

export const setSignUpPasswordConfirm = (confirmPassword) => ({
    type: SET_SIGN_UP_PASSWORD_CONFIRM,
    value: confirmPassword
})

export const showSignUpLoading = () => ({
    type: SET_SIGN_UP_LOADING
})

export const hideSignUpLoading = () => ({
    type: SET_SIGN_UP_NOT_LOADING
})