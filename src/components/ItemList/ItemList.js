import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
<div className="row justify-content-around my-5">
{productos.map(e=> <Item key={e.id}{...e}/>)}
</div>
)
};

export default ItemList;
