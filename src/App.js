import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
    <ItemListContainer texto={'Dos Agujas'} />
      <NavBar />
      
      <Footer />
    </>
  )
}

export default App;
