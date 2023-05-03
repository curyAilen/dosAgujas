import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {id} = useParams(); 

    useEffect(()=>{
        fetch('../productos.json')
        .then(response => response.json())
        .then(producto => {
            const productoEncontrado = producto.find(prod => prod.id === parseInt(id));
            setProduct(productoEncontrado);
        
        })
        .catch(error => {
            console.log('Error al obtener los productos:', error);
           
        });
      
    },[id])
    return(<ItemDetail productos={product}/>)
   
};
export default ItemDetailContainer;
