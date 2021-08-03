import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { recieveUsers } from './users'
import { recieveQuestion } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData(id = null){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(recieveUsers(users))
            dispatch(recieveQuestion(questions))
            dispatch(setAuthedUser(id))
            dispatch(hideLoading())
        })
    }
}