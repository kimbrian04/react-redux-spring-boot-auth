import * as CONST from '../constants/actionTypes'

const initState = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false
}

const signup = (state = initState, action) => {
    switch(action.type) {
        case CONST.SET_SIGN_UP_NAME:
            return Object.assign({}, state, {name: action.value})
        case CONST.SET_SIGN_UP_USERNAME:
            return Object.assign({}, state, {username: action.value})
        case CONST.SET_SIGN_UP_EMAIL:
            return Object.assign({}, state, {email: action.value})
        case CONST.SET_SIGN_UP_PASSWORD:
            return Object.assign({}, state, {password: action.value})
        case CONST.SET_SIGN_UP_PASSWORD_CONFIRM:
            return Object.assign({}, state, {confirmPassword: action.value})
        case CONST.SET_SIGN_UP_LOADING:
            return Object.assign({}, state, {isLoading: true})
        case CONST.SET_SIGN_UP_NOT_LOADING:
            return Object.assign({}, state, {isLoading: false})
        default:
            return state;
    }
}

export default signup