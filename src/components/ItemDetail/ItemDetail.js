import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, stock, precio, categoria, img}) => {
  return (
    <Card className="container">
      <div className="row">
        <div key={id} className="col-md-4">
          <Card.Img src={img} alt={nombre}/>
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <div>
              <p>${precio}</p>
              <p>Categoria: {categoria}</p>
              <p>Stock disponible: {stock}</p>

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
