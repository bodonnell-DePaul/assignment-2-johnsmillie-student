import {Container, Row, Col} from 'react-bootstrap';
import ToDoItem from '../component/ToDoItem';
import ItemCreator from '../component/ItemCreator';



function MainPage(){
    return (
      <Container>
        <Row>
            <Col>
               <ItemCreator></ItemCreator>
            </Col>

            <Col>
                <ToDoItem/>
            </Col>
        </Row>

      </Container>
    );
}

export default MainPage;