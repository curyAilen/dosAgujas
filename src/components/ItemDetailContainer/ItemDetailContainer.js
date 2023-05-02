import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {id} = useParams(); 

    useEffect(()=>{
        fetch('../productos.json')
        .then(response => response.json())
        .then(producto => {
            const productoEncontrado = producto.find(prod => prod.id === id);
            setProduct(productoEncontrado);
            console.log(productoEncontrado)
        })
        .catch(error => {
            console.log('Error al obtener los productos:', error);
         
        });
      
    },[id])
 
};
export default ItemDetailContainer;
