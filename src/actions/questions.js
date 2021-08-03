import { hideLoading, showLoading } from "react-redux-loading"
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


export function recieveQuestion(questions){
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}



export function handleAddQuestion(question){
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(hideLoading())
        })
    }
}


function addQuestionAnswer({authedUser, qid, answer}){
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswer(info){
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(addQuestionAnswer(info))
            dispatch(hideLoading())
        })
    }
}