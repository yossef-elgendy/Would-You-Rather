import { useContext } from "react";
import { Container, Row, Col, useAccordionToggle, AccordionContext, Accordion, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Question from "./Question";


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
        <Card.Header
            className={isCurrentEventKey?"h6 text-white bg-dark": "h6 text-dark bg-light" }
            type="button"
            onClick={decoratedOnClick}
         >
            {children}
        </Card.Header>
    );
  }
  

const Home = () => {

    const { unAnswered, answered } = useSelector(state => {
        const { questions, authedUser} = state
        const ids =  Object.keys(questions)
        const unAnswered = ids.filter(id => ( 
                !questions[id].optionOne.votes.includes(authedUser) &&
                !questions[id].optionTwo.votes.includes(authedUser)
            )  
        )
        const answered = ids.filter(id => ( 
                questions[id].optionOne.votes.includes(authedUser) ||
                questions[id].optionTwo.votes.includes(authedUser)
            )  
        )

        return { unAnswered, answered  }
    })


    return (
        <Container style={{marginTop:75}}>
           <Row className="justify-content-center">
              

            <Accordion className="m-2" defaultActiveKey="0">
                    <Card>
    
                        <ContextAwareToggle eventKey="0">Un Answered Questions</ContextAwareToggle>
            

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row className="justify-content-center">
                                    {unAnswered.length > 0 ? unAnswered.map( id => (
                                        <Col key={id} md={4} className="m-2">
                                            <Question key={id} id={id} flag={false}/>
                                        </Col>
                                        )
                                    ): <div>No Questions Available</div>}
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        
                        <ContextAwareToggle eventKey="1">Answered Questions</ContextAwareToggle>
                        
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row className="justify-content-center">
                                    {answered.length > 0 ? answered.map( id => (
                                        <Col key={id} md={4} className="m-2">
                                            <Question key={id} id={id} flag={true}/>
                                        </Col>
                                        )
                                    ): <div>No Questions Available</div>}
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

            </Accordion>
                    
           </Row>
        </Container>
    )
}

export default Home;