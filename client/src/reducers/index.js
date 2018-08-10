import { combineReducers } from 'redux'
import user from './user'
import signup from './signup'
import login from './login'

export default combineReducers({
    user,
    signup,
    login
})