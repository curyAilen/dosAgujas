import './cartWidget.css'; 
const CartWidget = () => {
  return (
    <section>
        <div className="productos d-flex align-items-center text-reset me-3" >      
          <img src="/images/carrito.png" height="30" alt="Carrito compras" loading="lazy"  className=" "></img>
          <p className="">0</p>
      </div>
    </section>)
}

export default CartWidget;


