import authedUser from  './authedUser'
import questions  from './questions'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

import { combineReducers } from 'redux'

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer
})