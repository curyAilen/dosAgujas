import { Button, Card, Container } from "react-bootstrap";
import { useContext } from "react";
import {CartProvider} from "../CartProvider";

function CartItem() {
  const { cart, addItem, vaciar, removerItem, } = useContext(CartProvider);
  return (
    <Container>
        <h3>Mi cart</h3>
          <hr style={{ width: "50%" }}></hr>
          {cart.map((item) => (
            <div
              style={{ width: "18rem", margin: "5px " }}
              className="d-flex"
              key={item.id}
            >
              <div className="card-header">
               
                <Card.Text>{item.categoria}</Card.Text>
              </div>
              <Card.Body className="m-5">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>Precio: ${item.precio}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end align-items-center">
                <Button
                  variant="secondary"
                  onClick={() => addItem(item.id)}
                >
                  -
                </Button>
                <h4 className="mx-2">{item.cantidad}</h4>
                <Button
                  variant="secondary"
                  onClick={() => removerItem(item.id)}
                >
                  +
                </Button>

                <Button variant="danger" onClick={() => vaciar(item.id)}>
                  Remover
                </Button>
              </Card.Footer>
            </div>
          ))}
    </Container>
  );
}

export default CartItem;
