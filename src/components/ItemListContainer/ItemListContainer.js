import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";


const productos = [
  {
    id: 1,
    nombre: "Gorro",
    stock: 4,
    precio: 569,
    categoria: "Gorro",
    img: "/images/products/gorro1.jpg",
  },
  {
    id: 2,
    nombre: "Manta",
    stock: 6,
    precio: 10094,
    categoria: "Manta",
    img: "/images/products/manta1.jpg",
  },
];
const ItemListContainer = () => {
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    const getEstado = fetch("productos.json")
    .then((res)=> res.json())
    getEstado.then((res) => setEstado(res));
  }, []);


  return <ItemList productos={estado} />;
};

export default ItemListContainer;
