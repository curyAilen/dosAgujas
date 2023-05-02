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
    img: "images/products/gorro1.jpg",
  },
  {
    id: 2,
    nombre: "Manta",
    stock: 6,
    precio: 10094,
    categoria: "Manta",
    img: "./public/images/products/manta.jpg",
  },
];
const ItemListContainer = () => {
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    const getEstado = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 3000);
    });
    getEstado.then((res) => setEstado(res));
  }, []);


  return <ItemList productos={estado} />;
};

export default ItemListContainer;
