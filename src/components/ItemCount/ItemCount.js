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
      
      <div className='d-flex itemCount justify-content-center align-items-center'>
      <button onClick={incrementa} className='btn boton mx-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >+</button>

    <h4 className='numero mx-2'>{cantidad}</h4>
    <button onClick={decrementa} className='btn boton mx-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</button>
    <button className='agregarCarrito btn boton mx-auto' onClick={()=> agregar(cantidad)} disabled={!stock}>Agregar</button>
</div>

        </>
    )

}
export default ItemCount;
