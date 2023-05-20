import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import mock from "../../productos.json"




const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
      function getProducts() {
      return new Promise((res) => {
        setTimeout(() => {
          res(mock);
        }, 1000);
      });
    }

    getProducts(categoriaId) 
      .then((products) => {
        if (categoriaId) {
          setProducts(
            products.filter((product) => product.categoria === categoriaId)
          );
        } else {
          setProducts(products);
        }
      })
  }, [categoriaId]);

  return (
    <div>
      <h1>{greeting}</h1>
     
        <ItemList products={products} />
   
    </div>
  );
};

export default ItemListContainer;
