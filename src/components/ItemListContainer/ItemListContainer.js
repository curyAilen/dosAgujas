import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import mock from "../../productos.json"



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const { categoriaID } = useParams();

  useEffect(() => {
      function getProducts() {
      return new Promise((res) => {
        setTimeout(() => {
          res(mock);
        }, 2000);
      });
    }

    getProducts(categoriaID) 
      .then((products) => {
        if (categoriaID) {
          setProducts(
            products.filter((product) => product.categoria === categoriaID)
          );
        } else {
          setProducts(products);
        }
      })
  }, [categoriaID]);

  return (
    <div>
      <h1>{greeting}</h1>
     
        <ItemList products={products} />
   
    </div>
  );
};

export default ItemListContainer;
