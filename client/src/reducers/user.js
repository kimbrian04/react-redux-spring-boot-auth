import * as CONST from '../constants/actionTypes'

const initState = {
    currentUser: null,
    isAuthenticated: false
}

const user = (state = initState, action) => {
    switch(action.type) {
        case CONST.SET_CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.value})
        case CONST.SET_USER_IS_AUTHENTICATED:
            return Object.assign({}, state, {isAuthenticated: true})
        case CONST.SET_USER_IS_NOT_AUTHENTICATED:
            return Object.assign({}, state, {isAuthenticated: false})
        default:
            return state;
    }
}

export default user