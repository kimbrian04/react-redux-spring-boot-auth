import * as CONST from '../constants/actionTypes'

const initState = {
    usernameOrEmail: '',
    password: '',
    isLoading: false,
    shouldRedirect: false
}

const login = (state = initState, action) => {
    switch(action.type) {
        case CONST.SET_LOG_IN_USERNAME_OR_EMAIL:
            return Object.assign({}, state, {usernameOrEmail: action.value})
        case CONST.SET_LOG_IN_PASSWORD:
            return Object.assign({}, state, {password: action.value})
        case CONST.SET_LOG_IN_LOADING:
            return Object.assign({}, state, {isLoading: true})
        case CONST.SET_LOG_IN_NOT_LOADING:
            return Object.assign({}, state, {isLoading: false})
        case CONST.SET_LOG_IN_TO_REDIRECT:
            return Object.assign({}, state, {shouldRedirect: true})
        default:
            return state;
    }
}

export default login