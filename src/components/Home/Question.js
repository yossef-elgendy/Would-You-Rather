import { useRef } from 'react';
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleAnswer } from '../../actions/questions'

const Question = ({id, flag}) => {
    const { question, authedUser } = useSelector(state => {
        const { questions, authedUser } = state
        return {question: questions[id], authedUser}
    })

    const answer = useRef('');
    const dispatch = useDispatch()
    const history = useHistory()
    const changeAnswer = (e) => {
        answer.current  = e.target.value
        console.log(answer)
    }

    

    const onSubmit = (e) => {
        e.preventDefault()
        if(answer !== ''){
            dispatch(handleAnswer({ authedUser, qid:id, answer:answer.current}))
            history.push(`/questions/${id}`)
        } else {
            alert('Please choose an answer !')
        }
        
    }

    return (
        <Card >
            <Card.Body className="text-white bg-dark">
                <Card.Title >Would You Rather? </Card.Title>
            </Card.Body>
            <Form>
                <ListGroup className="list-group-flush">
                    
                    <ListGroupItem key="optionOne">
                        { flag 
                        ?<Form.Check
                            disabled
                            type={'radio'}
                            defaultChecked={question.optionOne.votes.includes(authedUser)}
                            id={`${question.id}-optionOne`}
                            name={`${question.id}-radio`}
                            label={question.optionOne.text}
                    
                        />
                        : <Form.Check 
                            type={'radio'}
                            id={`${question.id}-optionOne`}
                            name={`${question.id}-radio`}
                            label={question.optionOne.text}
                            value="optionOne"
                            ref={answer}
                            onClick={(e)=>changeAnswer(e)}
                        />    }
                        
                        
                    </ListGroupItem>
                    <ListGroupItem key="optionTwo">
                        {flag
                        ? <Form.Check 
                            disabled
                            defaultChecked={question.optionTwo.votes.includes(authedUser)}
                            type={'radio'}
                            id={`${question.id}-radio`}
                            name={`${question.id}-radio`}
                            label={question.optionTwo.text}
                        />
                        : <Form.Check 
                            type={'radio'}
                            id={`${question.id}-radio`}
                            name={`${question.id}-radio`}
                            ref={answer}
                            label={question.optionTwo.text}
                            value="optionTwo"
                            onClick={(e)=>changeAnswer(e)}
                        />
                        }
                        
                    </ListGroupItem>
                    
                </ListGroup>
                <Card.Footer>
                    {flag
                    ?<Link
                        to={`/questions/${question.id}`}
                        className="btn btn-outline-primary"
                    >
                        Details
                    </Link>
                    :<button 
                        type="submit"
                        onClick={(e)=> onSubmit(e)}
                        className="btn btn-outline-success"
                
                    >
                    Vote
                    </button>}
                    
                </Card.Footer>
            </Form>
        </Card>
    );


}

export default Question