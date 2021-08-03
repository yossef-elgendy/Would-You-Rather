import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Container, Row, Col, Card, Button, ListGroup, Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';


const QuestionDetails = ({match}) => {
    const questionId = match.params.id 
    const image = require.context('../../img', true)
    const history = useHistory()
    const { question, author, currentUser, users } = useSelector(state => {
        return {
            question: state.questions[questionId],
            author: state.users[state.questions[questionId].author],
            currentUser: state.users[state.authedUser],
            users:state.users
        }
    })

    const goBack = () => {
        history.push('/')
    }


    return (
        <Container style={{marginTop:75}}>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <Avatar alt={author.name} src={image(author.avatarURL).default}
                             style={{display:'inline-block'}}/>
                            <span style={{position:'relative', bottom:10, left:5 }}>{author.name}</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Would You Rather ?</Card.Title>

                            <ListGroup className="list-group-flush">
                                <ListGroup.Item key="optionOne">
                                    <Form.Check
                                        disabled
                                        type={'radio'}
                                        defaultChecked={question.optionOne.votes.includes(currentUser.id)}
                                        id={`${question.id}-optionOne`}
                                        name={`${question.id}-radio`}
                                        label={question.optionOne.text}
                                    />
                                    {Math.floor((question.optionOne.votes.length/(question.optionTwo.votes.length+question.optionOne.votes.length))*100)}% Voted for this answer.
                                    <br/>

                                    {question.optionOne.votes.length > 0 && `Number of users voted for this option: ${question.optionOne.votes.length}`}

                                    <AvatarGroup max={2} >
                                        {question.optionOne.votes.length > 0 && question.optionOne.votes.map(id => (
                                        <span key={id}>
                                            <Avatar  alt={users[id].name} src={image(users[id].avatarURL).default} />
                                        </span>
                                        ))}

                                    </AvatarGroup>

                                </ListGroup.Item>


                                <ListGroup.Item key="optionTwo">
                                    <Form.Check 
                                        disabled
                                        defaultChecked={question.optionTwo.votes.includes(currentUser.id)}
                                        type={'radio'}
                                        id={`${question.id}-radio`}
                                        name={`${question.id}-radio`}
                                        label={question.optionTwo.text}
                                    />
                                    {Math.floor((question.optionTwo.votes.length/(question.optionTwo.votes.length+question.optionOne.votes.length))*100)}% Voted for this answer.
                                    <br />
                                    {question.optionTwo.votes.length > 0 && `Number of users voted for this option: ${question.optionTwo.votes.length}`}
                                    
                                    <AvatarGroup max={2} >
                                        {question.optionTwo.votes.length > 0 && question.optionTwo.votes.map(id => (
                                            <Avatar key={id} alt={users[id].name} src={image(users[id].avatarURL).default} />
                                        ))}

                                    </AvatarGroup>
                                </ListGroup.Item>

                            </ListGroup>
                            <Button onClick={() => goBack()} variant="primary">Go Back</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionDetails;