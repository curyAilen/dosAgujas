import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className="container-fluid">

{products.map((product)=>{
  <div key={product.id} className="row justify-content-around my-5">
    <Item {...product}/>
  </div>
})}

</div>
)
};

export default ItemList;
