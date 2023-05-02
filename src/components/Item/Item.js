import { Link } from "react-router-dom";

const Item = (productos) => {
  
  return (
    
    <Link to={`/`}>

    <div className="container" >
      <div key={productos.id}>
          <div>
            <img src="{productos.img}"/>
          </div>
          <div>
            <h5>{productos.nombre}</h5>
            <p>{productos.precio}</p>
            <Link to={"/detalle" + productos.id}>Ver más</Link>
          </div>
      </div>  
    </div>
    </Link>
  );
};

export default Item;
