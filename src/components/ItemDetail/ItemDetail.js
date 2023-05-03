import { Link } from "react-router-dom";

const ItemDetail = ({productos}) => {


  return (
    
   
    <div className="card col-4" >
      <div key={productos.id} className="">
          <div className="card-img">
            <img src={productos.img} className="img-fluid"/>
          </div>
          <div className="card-body">
            <h5>{productos.nombre}</h5>
            <p>{productos.precio}</p>
            <p>{productos.categotia}</p>
            <p>{productos.stock}</p>

          </div>
      </div>  
    </div>
   
  );
};

export default ItemDetail;
