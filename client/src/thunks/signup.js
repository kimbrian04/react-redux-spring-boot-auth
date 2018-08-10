import {
    showSignUpLoading,
    hideSignUpLoading
} from '../actions/signup'

export function signupUser() {
    return function (dispatch, getState) {
        dispatch(showSignUpLoading())
        
        const { signup } = getState()
        let isValid = true

        /* Input Validation */
        // validate that password and confirmPassword is the same
        if (signup.password !== signup.confirmPassword)
            isValid = false

        /* TO DO: Addtional Validation
            1. Email
            2. Check if Username exists
            3. Check if Email exists
        */
        // validate that it is a proper email address
        /* End Input Validation */

        // submit if valid
        if (isValid === true) {
            let url = `http://localhost:8080/api/auth/signup`

            fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                body: JSON.stringify({
                    name: signup.name,
                    username: signup.username,
                    email: signup.email,
                    password: signup.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(hideSignUpLoading())
                })
        }
    }
}