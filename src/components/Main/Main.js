import { useState } from "react";
import Bufandas from "../page/Bufandas";
import Mantas from "../page/Mantas";
import Mitones from "../page/Mitones";
import Gorros from "../page/Gorros";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import {Route, Routes}  from "react-router-dom";



const Main =()=>{

    return(
<Routes>
<Route path="/" element={<ItemListContainer/>}></Route>
<Route path="/category/mantas"  element ={<Mantas/>}></Route>
<Route path="/category/gorros"  element ={<Gorros/>}></Route>
<Route path="/category/bufandas" element ={<Bufandas/>}></Route>
<Route path="/category/mitones"  element ={<Mitones/>}></Route>
<Route path="/detalle/:id"  element ={<ItemDetailContainer/>}></Route>


</Routes>
    )
}

export default Main;