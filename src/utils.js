import { db } from "./firebase";
import { collection, getDocs, doc } from "firebase/firestore";



export const getProductos = () => {
  const productosCollection = collection(db, "productos");
  return getDocs(productosCollection)
    .then((respuesta) => {
      const array_de_documentos = respuesta.docs;
      const resultado = array_de_documentos.map((documento) => {
        const id = documento.id;
        const data = documento.data();
        data.id = id;
        return data;
      });
      return resultado;
    })
    .catch((error) => {
      console.log(error);
    });
};

const saveSale = () => {

    
};

const getProdcutoDetail = () => {};
