import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, nombre } = props.producto;
  return (
    <div>
      <h1>{nombre}</h1>
      <Link to={`/item/${id}`}>Detalle</Link>
    </div>
  );
};

export default Item;
