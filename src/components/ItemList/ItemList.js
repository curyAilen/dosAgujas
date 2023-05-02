import { useState } from "react";
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
<div>
{productos.map(e=> <Item key={e.id}{...e}/>)}
</div>
)
};

export default ItemList;
