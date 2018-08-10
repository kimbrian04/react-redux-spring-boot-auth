import {
    SET_LOG_IN_PASSWORD,
    SET_LOG_IN_USERNAME_OR_EMAIL,
    SET_LOG_IN_LOADING,
    SET_LOG_IN_NOT_LOADING,
    SET_LOG_IN_TO_REDIRECT
} from '../constants/actionTypes'

export const setLogInUsernameOrEmail = (usernameOrEmail) => ({
    type: SET_LOG_IN_USERNAME_OR_EMAIL,
    value: usernameOrEmail
})

export const setLogInPassword = (password) => ({
    type: SET_LOG_IN_PASSWORD,
    value: password
})

export const showLogInLoading = () => ({
    type: SET_LOG_IN_LOADING
})

export const hideLogInLoading = () => ({
    type: SET_LOG_IN_NOT_LOADING
})

export const redirectFromLogInPage = () => ({
    type: SET_LOG_IN_TO_REDIRECT
})