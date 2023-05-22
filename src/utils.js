import { useState } from 'react';
import { db } from "./firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

function ServicioFirebase() {
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);

  const fetchCollection = async () => {
    try {
      const data = collection(db, "items");
      const col = await getDocs(data);
      const response = col.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItemProducto = async (id) => {
    try {
      const document = doc(db, "items", id);
      const response = await getDoc(document);
      let result = response.data();
      setProducto({ id: response.id, ...result });
    } catch (error) {
      console.log(error);
    }
  };


  return {
    producto,
    productos,
    fetchCollection,
    fetchItemProducto
  };
}

export default ServicioFirebase;
