
import { Container, Row, Col} from "react-bootstrap"
import { useSelector } from "react-redux"
import { Redirect } from 'react-router-dom';
import Question from '../Home/Question';
import Details from './Details';


const QuestionDetails = ({match}) => {
    const questionId = match.params.id 
    const data = useSelector(state => {
        if(Object.keys(state.questions).includes(questionId)){
            return {
                question: state.questions[questionId],
                author: state.users[state.questions[questionId].author],
                currentUser: state.users[state.authedUser],
                users:state.users,
                
            }
        } else {
            return false
        }
       
    })
    
    const { question, author, currentUser, users } = data !== false ? data : {}


    if(data === false){
        return <Redirect to ="/404"/>
    }
    
    const answered = question.optionOne.votes.includes(currentUser.id) || question.optionTwo.votes.includes(currentUser.id) 

    return (
        <Container style={{marginTop:75}}>
            <Row className="justify-content-center">
                <Col md={12}>
                    {answered
                    ? <Details
                        question={question}
                        author={author}
                        currentUser={currentUser}
                        users={users}
                        />
                    : <Question id={questionId} flag={false} />
                    
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionDetails;