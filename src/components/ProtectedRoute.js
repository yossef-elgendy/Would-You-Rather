
import { useSelector } from 'react-redux'
import { Route, Redirect, useLocation} from 'react-router-dom'

const ProtectedRoute = ({component:Component, exact , path})=>{
    const authedUser = useSelector(state => state.authedUser)
    const users =  useSelector(state => state.users)
    const requestedPath = useLocation()
    const isAuthed = Object.keys(users).includes(authedUser)
    return (
            <Route
                exact={exact}
                path={path}
                render={(props)=>
                isAuthed 
                ?   <Component {...props}/>
                :   <div>
                        <Redirect to={{
                            pathname:"/login",
                            state:{requestedPath: requestedPath.pathname}
                            }}/>
                    </div>
                }
            />
        )
}
export default ProtectedRoute;