import { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const ServicioFirebase = () => {
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
  
  const addOrder = async (item) => {
    try {
      const ordersCollection = collection(db, "order");
      await addDoc(ordersCollection, item);
    } catch (error) {
      console.log("Error al agregar el nuevo item a Firebase:", error);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return {
    producto,
    productos,
    addOrder,
    fetchItemProducto
  };
};

export default ServicioFirebase;
