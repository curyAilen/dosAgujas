import {  Row, Col, Container } from "react-bootstrap";
import FormOrder from "./FormOrder";
import CartItem from "./CartItem";


function Cart() {

  return (
    <Container>
      <Row>
        <Col xl={6}>
        <CartItem/>
        </Col>
        <Col xl={6}>
          <FormOrder />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
