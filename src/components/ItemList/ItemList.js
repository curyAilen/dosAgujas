import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className="container-fluid">
<div className="row justify-content-around my-5">
{products.map(e=> <Item key={e.id}{...e}/>)}
</div>
</div>
)

};


export default ItemList;
