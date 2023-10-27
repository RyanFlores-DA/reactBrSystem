import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlacementMultiExample() {
    return (
        <Container>
          <Row>
            <Col xs={{ order: 17 }}></Col>
            <Col xs={{ order: 2 }}><h1 class="display-2">Menu</h1></Col>
            <Col xs={{ order: 2 }}></Col>
          </Row>
        </Container>
      );
    }

export default PlacementMultiExample;