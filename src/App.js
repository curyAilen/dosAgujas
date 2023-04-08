import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
   
      <NavBar />
      <ItemListContainer greeting={'Dos Agujas'} />
      <Footer />
    </>
  )
}

export default App;
