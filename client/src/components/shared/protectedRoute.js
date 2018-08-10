import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

const getRoute = (Component, props) => {
    console.log(props)
    if (props.isAuthenticated === true) {
        return <Component {...props} />
    }   
    else {
        return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
    }
}

const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest} render={() => getRoute(Component, rest)}/>
    )
}

export default ProtectedRoute