
import {Container, Row, Col, ListGroup, Tab} from 'react-bootstrap';
import "../css/ToDoItem.css";
import todos from "../data/todoItems";
import Form from 'react-bootstrap/Form';

function ToDoItem(){
    return (
      <div>
        <Container>
          <Row>
            <Col lg="4">
                  {todos.map((item, index) => (
                  
                        <Col>
                           <ListGroup>
                          <a href="." eventKey={item.title}>
                            <ListGroup.Item id={getColor(item.dueDate)}>
                                 {item.title}
                            </ListGroup.Item>
                          </a>
                            </ListGroup>
                        </Col>

                    ))}
              </Col>
              <Col>
                <Container>
                
                   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                     <Tab.Content>
                       <Tab.Pane eventKey="first">
                         <div contentEditable> 
                           {getEarliestDueDate(todos)[1]}
                         </div>
                       <Form>
                       {/* <Form.Group className="mb-3" controlId="formContent">
                          <Form.Control id='tabDescription' type="text" placeholder={getEarliestDueDate(todos)}  as="textarea" rows="7"/>
                        </Form.Group> */}
                        <Form.Group className="w-25" controlId="formDate">
                           <Form.Control  type="date"    />
                        </Form.Group>
                     </Form>

                            </Tab.Pane>

                          </Tab.Content>
                        </Tab.Container>
                    </Container>
                    </Col>
            </Row>
          </Container>
      </div>


    );
}


function getColor(item) {
    let res = "";
    const due = new Date(item);
    const danger = due.setDate(due.getDate() - 2);
    const warning =   due.setDate(due.getDate() - 2);
    const success =   due.setDate(due.getDate() - 3);
    const now = new Date();
    if(danger < now){
      res = "danger";
    }
    else if(warning < now){
      res = "warning";
    }
    else if(success < now){
      res = "success";
    }
    else{
     res = "primary"
    }
    return res;
}

function getEarliestDueDate(todos){
  let min = new Date( todos[0].dueDate);

  let res = todos[0].description; 
  for(let i = 1; i < todos.length; i++){
   
    if(new Date(todos[i].dueDate) < min){
      min = todos[i].dueDate;
      res = todos[i].description;
    }
  }
  return [min,res];
}
export default ToDoItem;