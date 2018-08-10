import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

const getRoute = (Component, props) => {
    if (props.isAuthenticated === true) {
        return <Component {...props} />
    }   
    else {
        return <Redirect to='/login' />
    }
}

const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest} render={() => getRoute(Component, rest)}/>
    )
}

export default ProtectedRoute