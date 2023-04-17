import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Dos Agujas'} />
      <ItemCount inicial={1} stock={25} agregar={(cantidad)=> console.log("Agregado al carrito:", cantidad)}></ItemCount>
      <Footer />
    </>
  )
}

export default App;
