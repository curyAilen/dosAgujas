import './itemCount.css';
import { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementa = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementa = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleClickAgregar = () => {
    if (stock > 0) {
      onAdd(cantidad);
    }
  };

  return (
    <div className="itemCount d-flex justify-content-center align-items-center">
      <button onClick={incrementa} className="btn boton mx-2">+</button>
      <h4 className="numero mx-2">{cantidad}</h4>
      <button onClick={decrementa} className="btn boton mx-2">-</button>
      <button className="agregarCarrito btn boton mx-auto" onClick={handleClickAgregar} disabled={stock <= 0}>
        {stock <= 0 ? "No disponible" : "Agregar"}
      </button>
    </div>
  );
};

export default ItemCount;
