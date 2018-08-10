import {
    showLogInLoading,
    hideLogInLoading,
    redirectFromLogInPage
} from '../actions/login'

import { setToUserIsAuthenticated } from '../actions/user'

import { ACCESS_TOKEN } from '../constants/constants'

export function handleLogIn() {
    return function (dispatch, getState) {
        dispatch(showLogInLoading())
        
        const { login } = getState()
        let isValid = true

        // validate that username and password have been entered
        if (login.usernameOrEmail.length === 0 || login.password.length === 0) {
            isValid = false
        }        

        // submit if valid
        if (isValid === true) {
            let url = `http://localhost:8080/api/auth/signin`
            let resStatus

            fetch(url, {
                method: 'post',
                //credentials: 'include', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                body: JSON.stringify({
                    usernameOrEmail: login.usernameOrEmail,
                    password: login.password
                })
            })
                .then(response => {
                    resStatus = response.status
                    return response.json()
                })
                .then(data => {
                    switch(resStatus) {
                        case 200:
                            localStorage.setItem(ACCESS_TOKEN, data.accessToken)
                            dispatch(hideLogInLoading())
                            dispatch(setToUserIsAuthenticated())
                            dispatch(redirectFromLogInPage())
                            break
                        default:
                            throw new Error(data.message)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}