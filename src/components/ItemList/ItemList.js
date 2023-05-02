import { useState } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
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
      </div>
  </div>  
</div>
</Link>

)
};

export default ItemList;
