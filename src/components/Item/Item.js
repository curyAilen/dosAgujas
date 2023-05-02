import { Link } from "react-router-dom";

const Item = (productos) => {
  
  return (
    
   
    <div className="card col-4" >
      <div key={productos.id} className="">
          <div className="card-img">
            <img src={productos.img} className="img-fluid"/>
          </div>
          <div className="card-body">
            <h5>{productos.nombre}</h5>           
            <Link to={"/detalle/" + productos.id}>Ver más</Link>
          </div>
      </div>  
    </div>
   
  );
};

export default Item;
