import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import "../css/ItemCreator.css";
function ItemCreator(){
    return (
      <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Add To Do Item" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Description"  as="textarea" rows={3}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="primary" type="submit" id='submit-button'>
        Submit
      </Button>
    </Form>
    );
}
export default ItemCreator;