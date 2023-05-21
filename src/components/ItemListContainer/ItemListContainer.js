import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = categoriaId
          ? query(collection(db, "productos"), where("categoria", "==", categoriaId))
          : query(collection(db, "productos"));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [categoriaId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
