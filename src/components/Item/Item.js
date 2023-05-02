import { Link } from "react-router-dom";

const Item = (productos) => {
  return (
    <div key={productos.id} className="card col-4">
      <div className="card-header">
        <h5 className="card-title">{productos.nombre}</h5>
      </div>
      <img src={productos.img} className="img-fluid card-img-top" />
      <div className="card-body">
        <Link to={"/detalle/" + productos.id} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
