import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
  const [estado, setEstado] = useState([]);

  const parametros = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch('../../productos.json');
        const productos = await respuesta.json();
        setEstado(productos);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerProductos();
  }, [parametros.id])

  return (
    <ItemList productos={estado} />
  );
}

export default ItemListContainer;
