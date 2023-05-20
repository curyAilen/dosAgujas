import { useState } from 'react'
import { db } from "./firebase";
import {addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore";


function ServicioFirebase(){

  const [producto, setProducto]=useState({});

  const [productos, setProductos]=useState([])
    
    //fetchGetDataCollection
    const collection=async()=>{
        try{
            const data=collection(db,"items");
            const col=await getDocs(data)
            const response= col.docs.map(doc=>(
                ({id:doc.id, ...doc.data()}))
                )
            setProductos(response)
        } catch(error){
            console.log(error)
        }
    }
}
//fetchGetIndividualProduct
const itemProducto= async (id)=>{
  try{
      const document= doc(db,"items",id)
      const response= await getDoc(document)
      let result=response.data()
      setProducto({id:response.id,...result})
  }
  catch (error){
      console.log(error)
  }
}

//fetchGenerateTicket
const addOrder= async (datos)=>{
  let orden="";
      try{
          const col=collection(db,"ordenes")
          const order= await addDoc(col,datos)
          orden=order.id
          return orden
      } catch (error){
      }

      }
      
    return (
        producto,
        productos,
        addOrder,
        collection,
        itemProducto 
    )



export default ServicioFirebase;