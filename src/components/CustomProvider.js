import { createContext, useState } from "react"
export const contexto = createContext();

const { Provider } = contexto


const CustomProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [nombre,setNombre] = useState("Ailu");

  
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  }; 

  const valorDelContexto = {
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    nombre : nombre,
    carrito : []
  }
 return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider;