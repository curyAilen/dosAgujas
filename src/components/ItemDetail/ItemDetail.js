import { Container, Row, Col, Image } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, stock, precio, categoria, img}) => {
  return (
    
       <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6}>
          <Image src={img} alt={nombre} thumbnail />
        </Col>
        <Col xs={12} lg={6}>
          <h4 className="fs-4" >
            {nombre}
          </h4>
          <h5 className="fs-5" >
            ${precio} - {stock} unidades disponibles
          </h5>
         
          <div className="d-flex justify-content-center mt-4">
          <ItemCount
                inicial={1}
                stock={100}
                agregar={(cantidad) =>
                  console.log("Agregado al carrito:", cantidad)
                }
              ></ItemCount>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
