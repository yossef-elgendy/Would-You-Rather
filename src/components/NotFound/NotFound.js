import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  
    return (
        <Container style={{marginTop:75}}>
            <Row className="justify-content-center text-center" style={{height:'1650'}}>
                <Col>
                    <div className="page-wrap d-flex flex-row align-items-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={12} className="text-center">
                                    <span className="display-1 d-block">404</span>
                                    <div className="mb-4 lead">The page you are looking for was not found.</div>
                                    <Link to="/" className="btn btn-outline-primary">Back to Home</Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default NotFound;