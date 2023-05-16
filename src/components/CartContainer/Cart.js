import { Button, Card, Image, Row, Col, Container } from "react-bootstrap";
import FormOrder from "./FormOrder";
import { useContext } from "react";
import { contexto } from "../CustomProvider";

function Cart() {
  const { carrito, addItem, removeItem } = useContext(contexto);

  const handleIncrement = (itemId) => {
    const item = carrito.find((item) => item.id === itemId);
    if (item) {
      addItem(item, item.cantidad + 1);
    }
  };

  const handleDecrement = (itemId) => {
    const item = carrito.find((item) => item.id === itemId);
    if (item && item.cantidad > 1) {
      removeItem(item);
    }
  };
  const handleRemove = (itemId) => {
    const item = carrito.find((item) => item.id === itemId);
    if (item) {
      removeItem(item);
    }
  };

  return (
    <Container>
      <Row>
        <Col xl={6}>
          <h3>Mi carrito</h3>
          <hr style={{ width: "50%" }}></hr>
          {carrito.map((item) => (
            <div
              style={{ width: "18rem", margin: "5px " }}
              className="d-flex"
              key={item.id}
            >
              <div className="card-header">
                <Card.Img src={item.img} />
                <Card.Text>{item.categoria}</Card.Text>
              </div>
              <Card.Body className="m-5">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>Precio: ${item.precio}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end align-items-center">
                <Button
                  variant="secondary"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </Button>
                <h4 className="mx-2">{item.cantidad}</h4>
                <Button
                  variant="secondary"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </Button>

                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Remover
                </Button>
              </Card.Footer>
            </div>
          ))}
        </Col>
        <Col xl={6}>
          <FormOrder />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
