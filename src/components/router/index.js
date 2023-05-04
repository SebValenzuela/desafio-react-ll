import { Route,Routes } from "react-router-dom";

import Home from "../home";
import Contacto from "../Contacto";
import Personaje from "../personaje";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Contacto/>}/>
            <Route path="/personaje/:id" element={<Personaje/>}/>
        </Routes>
    )
}