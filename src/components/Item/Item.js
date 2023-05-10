import { Link } from "react-router-dom";

const Item = ({id, nombre, img}) => {
  return (
    <div key={id} className="card col-lg-3 m-2 col-md-10">
      <div className="card-header">
        <h5 className="card-title">{nombre}</h5>
      </div>
      <img src={img} className="img-fluid card-img-top" />
      <div className="card-body">
        <Link to={'/detalle/${id}'} as={Link} className="btn btn-primary">
      
          Ver más
        </Link>
      </div>
    </div> 
  );
};

export default Item;
