import { Button, Form, Row, Col,} from "react-bootstrap";
const FormOrder= ( )=>{
    return(

<Form >      
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>
</Row>


<Row className="mb-3">
  
<Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
  <Form.Label>Dirección de envio</Form.Label>
  <Form.Control placeholder="Av. corrientes 1500" />
</Form.Group>

  <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>Localidad</Form.Label>
    <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Código Postal</Form.Label>
    <Form.Control />
  </Form.Group>
</Row>

<Button variant="primary" type="submit">
  Enviar pedido
</Button>
</Form>
    )
}
export default FormOrder


