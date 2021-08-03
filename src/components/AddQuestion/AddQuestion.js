
import { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/questions';


const AddQuestion = () => {
    const [optionOneText, setOptionOne] = useState('')
    const [optionTwoText, setOptionTwo] = useState('')
    const author = useSelector(state => state.authedUser)
    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        e.preventDefault()

        if(optionOneText === "" || optionTwoText === "" ){
            alert("The two input fields are required, please enter the Two Options !!")
            
        } else {

            dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
            history.push('/') 
        }
        
    }

    return (
        <Container style={{marginTop:75}}>
            <Row className="justify-content-center text-center">
                <Col className="h5" md={5}>
                    Add a Would You Rather Question 
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={7}>
                    <Form onSubmit={(e)=>onSubmit(e)} className="bg-dark rounded text-white p-4">
                        <Form.Group className="mb-3" controlId="formBasicAnswer1">
                            <Form.Label>Option One:</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={optionOneText} 
                                placeholder="Option One"
                                onChange={(e) => setOptionOne(e.target.value)}  
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAnswer2">
                            <Form.Label>Option Two:</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={optionTwoText} 
                                onChange={(e) => setOptionTwo(e.target.value)} 
                                placeholder="Option Two" 
                            />
                        </Form.Group>

                        <Button variant="outline-info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddQuestion;