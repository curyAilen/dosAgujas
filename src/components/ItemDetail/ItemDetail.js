import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productos }) => {
  return (
    <Card className="container">
      <div className="row">
        <div key={productos.id} className="col-md-4">
          <Card.Img src={productos.img} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{productos.nombre}</Card.Title>
            <div>
              <p>${productos.precio}</p>
              <p>Categoria: {productos.categoria}</p>
              <p>Stock disponible: {productos.stock}</p>

              <ItemCount
                inicial={1}
                stock={100}
                agregar={(cantidad) =>
                  console.log("Agregado al carrito:", cantidad)
                }
              ></ItemCount>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ItemDetail;
