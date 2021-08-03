import { RECIEVE_USERS } from '../actions/users'
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function users(state={} , action){
    switch(action.type){
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers:{
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }

        default:
            return state

    }
}