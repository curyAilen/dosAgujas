import { Button, Card, Container, Image } from "react-bootstrap";
import { useCart } from "../CartProvider";

function CartItem() {
  const { removeItem, decreaseQuantity, cart, addItem, getTotalQuantity } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.precio * cartItem.quantity;
    }, 0);
  };

  return (
    <Container>
      <h3>Mi carrito</h3>
      <hr style={{ width: "50%" }} />
      {cart.map((cartItem) => (
        <div
          style={{ width: "18rem", margin: "5px " }}
          className="d-flex"
          key={cartItem.item.id}
        >
          <div className="card-header">
            <Image src={cartItem.item.img} style={{ height: "175px" }} />
            <Card.Text>{cartItem.item.categoria}</Card.Text>
          </div>
          <Card.Body className="m-5">
            <Card.Title>{cartItem.item.nombre}</Card.Title>
            <Card.Text>Precio: ${cartItem.item.precio}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end align-items-center">
          
            <Button  onClick={() => decreaseQuantity(cartItem.item.id)} className="btn boton mx-2">
              -
            </Button>
            <h5>{cartItem.quantity}</h5>
            <Button onClick={() => addItem(cartItem.item, 1)} className="btn boton mx-2">
              +
            </Button>
            <Button variant="danger" onClick={() => removeItem(cartItem.item.id)}>
              Remover
            </Button>
          </Card.Footer>
        </div>
      ))}
      <div>
        <h5>Total de productos: {getTotalQuantity()}</h5>
        <h5>Total a pagar: ${getTotalPrice()}</h5>
      </div>
    </Container>
  );
}

export default CartItem;
