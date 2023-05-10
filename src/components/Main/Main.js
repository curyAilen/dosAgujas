import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import {Route, Routes}  from "react-router-dom";




const Main =()=>{

    return(
<Routes>
<Route path="/" element={<ItemListContainer/>}></Route>
<Route path="/categoria/:categoriaId" element={<ItemListContainer/>}></Route>
<Route path="/detalle/:id"  element ={<ItemDetailContainer/>}></Route>
</Routes>
    )
}

export default Main;