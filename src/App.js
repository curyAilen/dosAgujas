import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./components/CartContainer/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
import {CartProvider} from "./components/CartProvider";
import Perfil from "./components/page/Perfil";

const App = () => {
  return (

    <BrowserRouter>
    <CartProvider>    
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />       
        <Route path="/cart" element={<Cart />} />       
        <Route path="/perfil" element={<Perfil />} />       
      </Routes>
      <Footer/>
      </CartProvider>
      </BrowserRouter>

  )
}

export default App;
