import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({ id, ...data });
        } 
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div>
      {<ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
