import { useContext } from "react"
import { contexto } from "../CustomProvider";

function Cart() {
    const { cart, addItem, removeItem, nombre } = useContext(contexto);
    
  
    return (
      <div>
      <p>Soy el carrito {nombre}</p>
      </div>
    );
  }
  
  export default Cart;