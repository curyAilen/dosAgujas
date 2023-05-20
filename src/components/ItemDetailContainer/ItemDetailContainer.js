import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import mock from "../../productos.json";
import { CartOrder } from "../CartProvider";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
  
    useEffect(() => {  
      function getProducts() {
        return new Promise((res) => {
          setTimeout(() => {
            res(mock);
          }, 1000);
        });
      }
  
      getProducts(id)
        .then((product) => {
          setProduct(product.find((x) => x.id ===  parseInt(id)));
        })
    }, [id]);
  
    return(
    <div>
    <ItemDetail {...product} />
    </div>
    )
   
};
export default ItemDetailContainer;
