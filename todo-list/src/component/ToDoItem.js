///John Smillie
// CSC436 Assignment 2
import { Row, Col, ListGroup, Tab} from 'react-bootstrap';
import "../css/ToDoItem.css";
import todos from "../data/todoItems";

function ToDoItem(){
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={getEarliestDueDate(todos).title} >
          <Row>
            <Col lg="4">
               <ListGroup>
                 {todos.map((item, index) => (    
                     <ListGroup.Item variant={getColor(item.dueDate)} eventKey={item.title} action value={item} >
                          {item.title}
                     </ListGroup.Item>
                 ))}
                 </ListGroup>
            </Col>
            <Col lg="8">
                 <Tab.Content>
                 {todos.map((item2, index2) => (    
                   <Tab.Pane key={index2}  eventKey={item2.title}>
                     <div contentEditable> 
                       {item2.description}
                     </div>
                      <input type="date" value={item2.dueDate}  />
                    </Tab.Pane>
                  ))}  
                 </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

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

  let res = todos[0]; 
  for(let i = 1; i < todos.length; i++){
   console.log(min)
   const dDate = new Date(todos[i].dueDate)
   console.log(dDate)
    if(dDate < min){
      min = dDate;
      res = todos[i];
    }
  }
  return res;
}
export default ToDoItem;





/*
 <Form>
                        <Form.Group className="w-25" controlId="formDate">
                           <Form.Control  type="date"   placeholder={new Date(item2.dueDate).getDate} />
                        </Form.Group>
                     </Form>
                     */