import { Button, Card, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, nombre, img, precio}) => {
  return (
    <Card key={id} className="shadow-sm">
      <ListGroup className="list-group-flush">
      <ListGroup.Item className="text-center">
      <Image src={img} style={{ height: "175px" }} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title className="fs-6" >
          {nombre}
        </Card.Title>
        <div className="d-flex align-items-center justify-content-between">
          <strong>${precio}</strong>
          <Button as={Link} to={`/detalle/${id}`}>
            Ver más
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
