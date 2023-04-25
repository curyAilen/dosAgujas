import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter} from "react-router-dom";


const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={'Dos Agujas'} />
      <Main></Main>
      <ItemCount inicial={1} stock={25} agregar={(cantidad)=> console.log("Agregado al carrito:", cantidad)}></ItemCount>
      <Footer />
      </BrowserRouter>
   
  )
}

export default App;
