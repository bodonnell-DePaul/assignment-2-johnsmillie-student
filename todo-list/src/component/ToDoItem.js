
import {Container, Row, Col, ListGroup, Tab} from 'react-bootstrap';
import "../css/ToDoItem.css";
function ToDoItem(){
    return (
      <div>
      <Container>
        <Row>
          <Col lg="4">
             <ListGroup>
             <a href="" eventKey="">
              <ListGroup.Item id="todoItem">
                   Dynamic Content{}
              </ListGroup.Item>
              </a>
              </ListGroup>
          </Col>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">Dynamically served content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      </div>


    );
}

export default ToDoItem;