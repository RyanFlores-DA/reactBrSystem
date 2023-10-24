import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlacementMultiExample() {
    return (
        <Container>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}><h1 class="display-2">Display 2</h1></Col>
            <Col xs={{ order: 1 }}></Col>
          </Row>
        </Container>
      );
    }

export default PlacementMultiExample;