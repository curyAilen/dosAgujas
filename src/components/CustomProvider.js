import { createContext, useState } from "react"

export const contexto = createContext({
  carrito: []
});

const { Provider } = contexto

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const inCarrito = (itemId) => {
    return carrito.some((prod) => prod.id === itemId);
  };

  const addItem = (item, cantidad) => {
    const newItem = { ...item, cantidad: cantidad };
    if (!inCarrito(item.id)) {
      setCarrito((prev) => [...prev, { ...item, cantidad }]);
    } else {
      setCarrito((prev) =>
        prev.map((prod) =>
          prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
        )
      );
    }
  };

  const removeItem = (itemId) => {
    const carritoUpdate = carrito.filter((prod) => prod.id === itemId);
    setCarrito(carritoUpdate);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


 return (
    <Provider value={{carrito, addItem, inCarrito, removeItem, vaciarCarrito} }>
      {children}
    </Provider>
  )
}

export default CustomProvider;