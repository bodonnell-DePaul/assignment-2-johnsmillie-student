import {Container, Row, Col} from 'react-bootstrap';
import ToDoItem from '../component/ToDoItem';
import ItemCreator from '../component/ItemCreator';
import "../css/MainPage.css";



function MainPage(){
    return (
     
      <Container>
         <h1>Assignment 2: John's ToDo List</h1>
        <Row >

            <Col lg="4" >
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