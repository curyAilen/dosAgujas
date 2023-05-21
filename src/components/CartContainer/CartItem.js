import { Button, Card, Container } from "react-bootstrap";
import { useCart } from "../CartProvider";

function CartItem() {
  const { removeItem, decreaseQuantity, cart, addItem } = useCart();
  return (
    <Container>
      <h3>Mi carrito</h3>
      <hr style={{ width: "50%" }} />
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
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Remover
          </Button>
          <Button variant="secondary" onClick={() => decreaseQuantity(item.id)}>
            -
          </Button>
          <Button variant="secondary" onClick={() => addItem(item.id)}>
            +
          </Button>
          </Card.Footer>
        </div>
      ))}
    </Container>
  );
}


export default CartItem;
