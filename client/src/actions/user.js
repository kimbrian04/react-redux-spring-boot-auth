import {
    SET_CURRENT_USER,
    SET_USER_IS_AUTHENTICATED,
    SET_USER_IS_NOT_AUTHENTICATED
} from '../constants/actionTypes'

export const setCurrentUser = (currentUser) => ({
    type: SET_CURRENT_USER,
    value: currentUser
})

export const setToUserIsAuthenticated = () => ({
    type: SET_USER_IS_AUTHENTICATED
})

export const setToUserNotAuthenticated = () => ({
    type: SET_USER_IS_NOT_AUTHENTICATED
})