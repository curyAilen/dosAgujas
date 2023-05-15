import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CustomProvider from "./components/CustomProvider";


const App = () => {
  return (
    
    <BrowserRouter>
    <CustomProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />       
      </Routes>
      <Footer/>
      </CustomProvider>
      </BrowserRouter>

  )
}

export default App;
