import { createContext, useState } from "react"

export const contexto = createContext();

const { Provider } = contexto


const CustomProvider = ({children}) => {

  const [userName,setUserName] = useState()
  const [producto,setProducto] = useState()

  const guardarEnCarrito = (producto,cantidad) => {
    console.log("guardando en carrito")
    setProducto("nuevo producto")
  }
 

  setUserName("Ailu")

  const valorDelContexto = {
    user: userName,
    producto : producto,
    carrito : [],
    guardarEnCarrito : guardarEnCarrito
  }
  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider