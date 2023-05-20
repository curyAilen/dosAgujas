import { useContext } from "react";
import { CartOrder } from "../CartProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidad  } = useContext(CartOrder);

  return (
    <section>
      <Link to="/Cart" className="productos d-flex align-items-center text-reset me-3">
        <img src="/images/carrito.png" height="30" alt="Carrito compras" loading="lazy" className=" " />
        <p>{cantidad }</p>
      </Link>
    </section>
  );
};

export default CartWidget;
