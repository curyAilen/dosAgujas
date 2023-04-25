import { useState } from "react";
import Bufandas from "../page/Bufandas";
import {Route, Routes}  from "react-router-dom";



const Main =()=>{

    return(
<Routes>
<Route path="/" element ={<p>Home</p>}></Route>
<Route path="/mantas" element ={<p>Mantas</p>}></Route>
<Route path="/gorros" element ={<p>Gorros</p>}></Route>
<Route path="/bufandas" element ={<Bufandas/>}></Route>
<Route path="/mitones" element ={<p>Mitones</p>}></Route>

</Routes>
    )
}

export default Main;