import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row className="container-fluid">
        
          {products.map((e) => (
          <Col className="mt-5" xs={12} lg={4}>
          <Item key={e.id} {...e} /> 
          </Col>
          ))}
        
      </Row>
    </Container>
  );
};

export default ItemList;
