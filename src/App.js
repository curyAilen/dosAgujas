import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer texto={'Dos Agujas'} />
     
      <Footer />
    </>
  )
}

export default App;
