import { db } from "./firebase";
import { collection, getDocs, doc } from "firebase/firestore";

  //obtener refecencia de DB ===> 
        //const db = getFirestore(app)
    //obtener una referencia auna collecion  ===>   
        //const coleccion = collection(db, "productos")
    //hacer una consulta a la coleción ===> 
        //const consulta = getDocs(coleccion)
        //ESTO LO IMPORTAMOS EN ItemListContainer.js y reemplaza el fetch hecho y me trae todos los productos

const getProductos = ()=> {

    const coleccion = collection(db, "productos");
    const consulta = getDocs(coleccion);

    consulta
    .then((res)=>{
        const resParse = res.docs.map((doc)=>{
            const procuto = {
                id: doc.id,
                ...doc.data(),
            }
            console.log(procuto) //Deberia devolver el objeto con los datos de la base de datos
        
        })
        console.log(res);       
    })
    .catch((err)=>{
    console.log(err)
    })
}

const saveSale = ()=>{

}

const getProdcutoDetail = ()=>{
    
}