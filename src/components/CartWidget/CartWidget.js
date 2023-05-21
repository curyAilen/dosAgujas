import { useCart } from "../CartProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();


  return (
    <section>
      <Link to="/Cart" className="productos d-flex align-items-center text-reset me-3" style={{ textDecoration: 'none' }}>
        <img src="/images/carrito.png" height="30" alt="Carrito compras" loading="lazy" />
        <p>{getTotalQuantity() }</p>
      </Link>
    </section>
  );
};

export default CartWidget;
