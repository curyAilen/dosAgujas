import './itemCount.css';
import { useState } from 'react';



const ItemCount = ({inicial, stock, agregar})=>{
    const [cantidad, setCantidad] = useState (inicial)
    
    const incrementa = ()=>{ if(cantidad < stock){
        setCantidad(cantidad+1)
    }}
    const decrementa = ()=>{ if(cantidad > 1){
        setCantidad(cantidad-1)
    }}
    return(
        <>
        <div className='container'>
        <div className='row itemCount justify-content-center'>
            <button onClick={incrementa} className='btn col-3 boton'>+</button>
            <h4 className='numero col-1'>{cantidad}</h4>
        <button onClick={decrementa} className='btn col-3 boton'>-</button>
        
            <button className='agregarCarrito btn boton' onClick={()=> agregar(cantidad)} disabled={!stock}>Agregar</button>
        </div>
        </div>
        </>
    )

}
export default ItemCount;
