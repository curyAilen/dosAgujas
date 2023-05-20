import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartOrder = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === item.id) {
          element.cantidad = element.cantidad + cantidad;
        }
      }
      setCart(newCart);
    } else {
      setCart([...cart, { item: item, cantidad: cantidad }]);
    }
  };

  const removerItem = (id) => {
    const newCart = [...cart].filter((element) => element.item.id !== id);
    setCart(newCart);
  };

  const vaciar = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const getQuantity = () => {
    let quantity = 0;
    cart.forEach((element) => (quantity += element.cantidad));
    return quantity;
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.cantidad * element.item.precio;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        vaciar,
        removerItem,
        getQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
