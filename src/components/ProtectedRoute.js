
import { useSelector } from 'react-redux'
import { Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({component:Component, exact , path})=>{
    const authedUser = useSelector(state => state.authedUser)
    const users =  useSelector(state => state.users)
    const isAuthed = Object.keys(users).includes(authedUser)
    return (
            <Route
                exact={exact}
                path={path}
                render={(props)=>
                    isAuthed ? <Component {...props}/>: <div><Redirect to="/login"/></div>
                }
            />
        )
}
export default ProtectedRoute;