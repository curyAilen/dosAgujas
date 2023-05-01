import { useState } from "react";
//import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  const [producto, setProducto] = useState(productos);

  return (
    <div>     
      {producto.map((item) => (
        <div key={item.id}>
          <h5>{item.nombre}</h5>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
