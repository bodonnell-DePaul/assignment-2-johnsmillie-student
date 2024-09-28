
import {Container, Row, Col} from 'react-bootstrap';

function ToDoItem(){
    return (
      <div>
      <Container>
        <Row>
            <Col>
                <h3>To Do Header</h3>
            </Col>
            <Col>
                <h5>To Do Content</h5>
            </Col>
        </Row>
      </Container>
      </div>
    );
}

export default ToDoItem;