import "./itemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 5;
  const [quantity, setQuantity] = useState(initial);

  useEffect(() => {
  }, [quantity]);

  const incrementa = () => {
    setQuantity(quantity + 1);
  };
  const decrementa = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="itemCount d-flex justify-content-center align-items-center">
 
      <button onClick={decrementa} className="btn boton mx-2">
        -
      </button>
      <h4 className="numero mx-2">{quantity}</h4>
      <button onClick={incrementa} className="btn boton mx-2">
        +
      </button>
      <button
        className="agregarCarrito btn boton mx-auto"
        onClick={() => onAdd(quantity)}
        disabled={stock <= 0}
      >
        {stock <= 0 ? "No disponible" : "Agregar"}
      </button>
    </div>
  );
};

export default ItemCount;
