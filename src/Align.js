import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Align() {
    return (
        <div class="container text-center">
            <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col">
                <Container>
                    <Row>
                    <Col xs={{ order: 17 }}></Col>
                    <Col xs={{ order: 2 }}><h1 class="display-2">Menu</h1></Col>
                    <Col xs={{ order: 2 }}></Col>
                    </Row>
                </Container>
            </div>
            <div class="col">
            </div>
        </div>
        </div>
    );
  }

export default Align;