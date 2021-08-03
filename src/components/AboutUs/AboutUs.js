import { Container, Row, Col} from 'react-bootstrap'


const AboutUs = () => {

    return (
        <Container className="bg-dark text-white rounded p-3" style={{marginTop:75}}>
            <Row className="justify-content-start">
                <Col className="h2" md={5}>
                    About Us 
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col md={8}>
                    This is a small Project about a would you rather game, it is made for learning purposes. <br/>
                    I hope you enjoy my little game. <br/>
                    Thanks !!
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;