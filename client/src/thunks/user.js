import {
    setCurrentUser,
    setToUserIsAuthenticated,
    setToUserNotAuthenticated
} from '../actions/user'

import {
    ACCESS_TOKEN
} from '../constants/constants'

export function getCurrentUser() {
    return function (dispatch) {
        
        // if not authenticated
        if (!localStorage.getItem(ACCESS_TOKEN)) { 
            dispatch(setToUserNotAuthenticated())
        // if authenticated, get current user info
        } else { 
            let apiUrl = `http://localhost:8080/api/user/me`

            fetch(apiUrl)
                .then(response => {
                    switch(response.status) {
                        case 200:
                        case 201:
                            return response.json()
                        default:
                            throw new Error(response.message)
                    }
                    
                })
                .then(data => {
                    console.log(data)
                    switch(data.status) {
                        case 201:
                            dispatch(setToUserIsAuthenticated())
                            dispatch(setCurrentUser(data))
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