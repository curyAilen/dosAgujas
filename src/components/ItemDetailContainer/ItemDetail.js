import { Container, Row, Col, Image } from "react-bootstrap";
import { useContext } from "react";
import CartProvider from "./components/CartProvider";
import ItemCount from "../CartWidget/ItemCount";

const ItemDetail = ({ id, nombre, stock, precio, categoria, img }) => {
  const { addItem, carrito } = useContext(CartProvider);

  const handleAddToCart = (cantidad) => {
    const item = { id, nombre, stock, precio, categoria, img };

    // Verificar si el item ya está agregado al carrito
    const itemEnCarrito = carrito.find((item) => item.id === id);

    if (itemEnCarrito) {
      addItem(item, itemEnCarrito.cantidad + cantidad);
    } else {
      addItem(item, cantidad);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6}>
          <Image src={img} alt={nombre} thumbnail />
        </Col>
        <Col xs={12} lg={6}>
          <h4 className="fs-4">{nombre}</h4>
          <h5 className="fs-5">
            ${precio} - {stock} unidades disponibles
          </h5>

          <div className="d-flex justify-content-center mt-4">
            <ItemCount
              inicial={1}
              stock={stock}
              onAdd={handleAddToCart}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;

